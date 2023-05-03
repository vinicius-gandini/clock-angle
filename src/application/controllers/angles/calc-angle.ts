import { Controller } from '@/application/controllers';
import { HttpResponse } from '@/application/helpers';
import { CalcAngleService } from '@/application/services/calc-angle';
import { ServiceKeys } from '@/common/container/keys';
import { CalcAngleRepository } from '@/domain/repositories';
import { container } from 'tsyringe';

type Params = CalcAngleRepository.Params;
export class CalcAngleController implements Controller {
  async handle({ params }: Controller.Request<Params>): Promise<HttpResponse<CalcAngleRepository.Result>> {
    const calcAngleService = container.resolve(
      CalcAngleService
    );

    const formattedParams = { ...params, minute: params.minute ? params.minute : 0 }

    const angle = await calcAngleService.calc(formattedParams);

    return new HttpResponse(angle);
  }
}
