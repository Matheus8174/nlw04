import { EntityRepository, Repository } from 'typeorm';
import Survey from '../models/Survey';

// esse decorator indica que essa classe é um repositorio
@EntityRepository(Survey)
/* ela henrda Repository para ganhar os metodos que existem lá,
   além de Reseber a entidade como paremetro, no caso User
*/
class SurveyRepository extends Repository<Survey> {}

export default SurveyRepository;

// Repositorys são classes que manipulão as models/entitys, criando,
// atualizando, buscando ou deletando.
