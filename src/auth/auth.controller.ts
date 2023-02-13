import { Controller, Get, Param, Post, Put, Req, Res } from '@nestjs/common'
import { Request, Response } from 'express'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {};
  
  @Get('/callbacks/:platform')
  callbacks(@Req() req: Request, @Res() res: Response, @Param('platform') platform: string) {
    switch(platform) {
      case "naver":
        this.authService.naverCallback(req, res);
      case "google":
        this.authService.googleCallback(req, res);
      case "instagram":
        this.authService.instagramCallback(req, res);
      default:
        return res.status(403).json({
          message: "This platform is not supported.",
          status: 403
        })
    }
  }

  @Put("/code/:type")
  sendCode(@Req() req: Request, @Res() res: Response, @Param('type') type: string) {
    this.authService.sendCode(req, res, type);
  }
}
