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
}

export default SurveyController;
