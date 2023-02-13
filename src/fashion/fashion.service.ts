import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FashionEntity } from './entity/fashion.entity';

@Injectable()
export class FashionService {
  constructor(
    @InjectRepository(FashionEntity)
    private fashionRepository: Repository<FashionEntity>
  ) {}
}
