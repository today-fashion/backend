import { Controller } from '@nestjs/common';
import { FashionService } from './fashion.service';

@Controller('fashion')
export class FashionController {
  constructor(private fashionService: FashionService) {};

  
}
