import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import {AuthController, UsersController} from './users.controller';
import {JwtModule} from "@nestjs/jwt";
import {PassportModule} from "@nestjs/passport";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./entities/user.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {expiresIn: '1h'},
    }),
  ],
  providers: [UsersService],
  controllers: [UsersController, AuthController],
  exports: [UsersService],
})
export class UsersModule {}
