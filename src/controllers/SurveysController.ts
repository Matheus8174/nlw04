import { Response, Request } from 'express';
import { getCustomRepository } from 'typeorm';
import SurveyRepository from '../repositories/SurveysRepository';

class SurveyController {
  async create(req: Request, res: Response) {
    const { title, description } = req.body;

    const surveyRepository = getCustomRepository(SurveyRepository);

    const newSurvey = surveyRepository.create({
      title,
      description
    });

    await surveyRepository.save(newSurvey);

    return res.status(201).json(newSurvey);
  }

  async show(req: Request, res: Response) {
    const surveyRepository = getCustomRepository(SurveyRepository);

    // find é utilizado para listar todos os registros de uma tabela
    const allSurveys = await surveyRepository.find();

    return res.json(allSurveys);
  }
}

export default SurveyController;
