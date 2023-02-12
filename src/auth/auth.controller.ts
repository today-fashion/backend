import { AuthService } from './auth.service';
import { AuthEntity } from './entity/auth.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {};
  
}
