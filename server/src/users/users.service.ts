import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

class UserRepository {
}

@Injectable()
export class UsersService {
  constructor(
      private jwtService: JwtService,
      private userRepository: UserRepository,
  ) {}

  async register(userDto: any) {
    const { email, password, username } = userDto;


    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    try {

      const user = await this.userRepository.create({ email, username, password: hashedPassword });
      console.log('Користувач збережений з хешем:', hashedPassword);

      return { message: 'Реєстрація успішна' };
    } catch (error) {
      throw new ConflictException('Користувач з таким email вже існує');
    }
  }

  async login(loginDto: any) {
    const { email, password } = loginDto;


    const user = { id: 1, email: 'test@test.com', password: 'hashed_password_from_db' };


    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      throw new UnauthorizedException('Невірний логін або пароль');
    }


    const payload = { sub: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
