import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';

class UserController {
  async create(req: Request, res: Response) {
    const { body } = req;

    const userRepository = getRepository(User);

    const user = userRepository.create();
  }
}

export { UserController };
