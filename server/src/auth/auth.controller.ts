import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './/server/src/auth/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {

    }

    @Post('register')
    async register(@Body() registrationData: any) {

        return this.authService.register(registrationData);
    }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login(@Body() loginData: any) {
        return this.authService.login(loginData);
    }
}