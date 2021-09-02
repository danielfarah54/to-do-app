import { UserDTO } from './user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { User } from '../../db/models/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  getAll() {
    return this.userRepository.find();
  }

  getById(id: number) {
    return this.userRepository.findOne(id);
  }

  getByEmail(email: string) {
    return this.userRepository.findOne({ email });
  }

  create(userDTO: UserDTO) {
    const user = new User();
    user.name = userDTO.name;
    user.email = userDTO.email;
    user.password = userDTO.password;

    return this.userRepository.save(user);
  }

  async update(id: number, userDTO: UserDTO) {
    await this.userRepository.update(id, userDTO);

    return this.userRepository.findOne(id);
  }

  delete(id: number) {
    return this.userRepository.delete(id);
  }
}
