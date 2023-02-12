import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Auth } from './entity/auth.entity';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_REPOSITORY') 
    private authRepository: Repository<Auth>,
  ) {}

  async findAll(): Promise<Auth[]> {
    return this.authRepository.find();
  }
}
