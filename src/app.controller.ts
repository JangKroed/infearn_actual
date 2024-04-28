import { Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from './entity/user.entity';
import { Repository } from 'typeorm';

@Controller()
export class AppController {
  constructor(
    @InjectRepository(UserModel)
    private readonly userRepository: Repository<UserModel>,
  ) {}

  @Post('users')
  postUsers() {
    return this.userRepository.save({
      title: 'test title',
    });
  }

  @Get('users')
  getUsers() {
    return this.userRepository.find();
  }
}
