import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Request, Response } from 'express'
import { Repository } from 'typeorm'
import { AuthEntity } from './entity/auth.entity'

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthEntity)
    private authRepository: Repository<AuthEntity>
  ) {}

  async naverCallback(req: Request, res: Response) {
    
  }

  async googleCallback(req: Request, res: Response) {

  }

  async instagramCallback(req: Request, res: Response) {

  }

  async sendCode(req: Request, res: Response, type: string) {
    
  }
}
