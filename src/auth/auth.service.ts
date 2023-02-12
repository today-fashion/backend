import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthEntity } from './entity/auth.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthEntity)
    private authRepository: Repository<AuthEntity>
  ) {};
  
  
}
