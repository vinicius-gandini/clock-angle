import 'reflect-metadata';
import { CalcAngleRepository, SaveAngleRepository } from "@/domain/repositories";
import { CalcAngleService } from "./calc-angle";

describe('CalcAngleService', () => {
  let calcAngleService: CalcAngleService;
  let mockCalcAngleRepository: jest.Mocked<CalcAngleRepository>;
  let mockSaveAngleRepository: jest.Mocked<SaveAngleRepository>;

  beforeEach(() => {
    mockCalcAngleRepository = {
      retrieve: jest.fn(),
    } as jest.Mocked<CalcAngleRepository>;

    mockSaveAngleRepository = {
      save: jest.fn(),
    } as jest.Mocked<SaveAngleRepository>;

    calcAngleService = new CalcAngleService(mockCalcAngleRepository, mockSaveAngleRepository);
  })

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should return the saved angle if it already exists in the repository', async () => {
    const params = { hour: 1, minute: 30 };
    const savedAngle = { hour: 1, minute: 30, angle: 45 };
    mockCalcAngleRepository.retrieve.mockResolvedValueOnce(savedAngle);

    const result = await calcAngleService.calc(params);

    expect(result).toEqual({ angle: savedAngle.angle });
    expect(mockCalcAngleRepository.retrieve).toHaveBeenCalledTimes(1);
    expect(mockCalcAngleRepository.retrieve).toHaveBeenCalledWith(params);
    expect(mockSaveAngleRepository.save).not.toHaveBeenCalled();
  })

  it('should calculate the angle and save it to the repository if it does not already exist', async () => {
    const params = { hour: 3, minute: 45 };
    const expectedAngle = { hour: 3, minute: 45, angle: 180 };
    mockCalcAngleRepository.retrieve.mockResolvedValueOnce(null);

    const result = await calcAngleService.calc(params);

    expect(result).toEqual({ angle: expectedAngle.angle });
    expect(mockCalcAngleRepository.retrieve).toHaveBeenCalledTimes(1);
    expect(mockCalcAngleRepository.retrieve).toHaveBeenCalledWith(params);
    expect(mockSaveAngleRepository.save).toHaveBeenCalledTimes(1);
    expect(mockSaveAngleRepository.save).toHaveBeenCalledWith(expectedAngle);
  })
})
