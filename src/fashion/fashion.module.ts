import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FashionEntity } from './entity/fashion.entity';
import { FashionController } from './fashion.controller';
import { FashionService } from './fashion.service';

@Module({
  imports: [TypeOrmModule.forFeature([FashionEntity])],
  exports: [TypeOrmModule],
  controllers: [FashionController],
  providers: [FashionService]
})
export class FashionModule {}
