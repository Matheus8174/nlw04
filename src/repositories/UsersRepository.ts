import { EntityRepository, Repository } from 'typeorm';
import User from '../models/User';

// esse decorator indica que essa classe é um repositorio
@EntityRepository(User)
/* ela henrda Repository para ganhar os metodos que existem lá,
   além de Reseber a entidade como paremetro, no caso User
*/
class UsersRepository extends Repository<User> {}

export default UsersRepository;
