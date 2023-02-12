import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthEntity } from './auth/entity/auth.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'today-fashion',
      entities: [AuthEntity],
      synchronize: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
