import { UserDTO } from './user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  getAll() {
    return this.userRepository.find();
  }

  getById(id: string) {
    return this.userRepository.findOne(id);
  }

  create(userDTO: UserDTO) {
    const user = new User();
    user.name = userDTO.name;
    user.email = userDTO.email;
    user.password = userDTO.password;

    return this.userRepository.save(user);
  }

  async update(id: string, userDTO: UserDTO) {
    await this.userRepository.update(id, userDTO);

    return this.userRepository.findOne(id);
  }

  delete(id: string) {
    return this.userRepository.delete(id);
  }
}
