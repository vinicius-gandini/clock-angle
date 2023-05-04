import { Request, Response, NextFunction } from 'express';

export function validateClockParams(req: Request, res: Response, next: NextFunction) {
  const { hour, minute } = req.params;

  if (isNaN(parseInt(hour))) {
    return res.status(400).json({ error: 'Invalid hour' });
  }

  if (minute && isNaN(parseInt(minute))) {
    return res.status(400).json({ error: 'Invalid minute' });
  }

  next();
}
