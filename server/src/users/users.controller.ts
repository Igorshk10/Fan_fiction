import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import {UsersService} from "./users.service";


@Controller('auth')
export class UsersController {
  constructor(private UsersService: UsersService) {

  }

  @Post('register')
  async register(@Body() registrationData: any) {

    return this.UsersService.register(registrationData);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() loginData: any) {
    return this.UsersService.login(loginData);
  }
}
