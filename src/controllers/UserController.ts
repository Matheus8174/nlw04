import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../repositories/UsersRepository';

class UserController {
  async create(req: Request, res: Response) {
    const { name, email } = req.body;

    // usa-se getCustomRepository para pegarmos o repositorio criado
    const userRepository = getCustomRepository(UsersRepository);
    // SELECT * FROM USERS WHERE EMAIL = "EMAIL"
    const userAlreadyExists = await userRepository.findOne({
      email
    });

    if (userAlreadyExists) {
      return res.status(400).json({
        error: 'user already exists!'
      });
    }

    const newUser = userRepository.create({
      name,
      email
    });

    await userRepository.save(newUser);

    return res.json(newUser);
  }
}

export default UserController;
