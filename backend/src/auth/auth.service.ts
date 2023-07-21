import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { SignUpDto, SingInDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: SignUpDto) {
    const password = await argon.hash(dto.password);

    try {
      const user = await this.prisma.user.create({
        data: {
          ...dto,
          password: password,
        },
      });
      if (user)
        return this.signToken(
          user.id,
          user.email,
          user.address,
          user.firstname,
          user.lastname,
          user.phone,
          user.identification,
          user.birthDate,
        );
    } catch (error) {
      console.log(error);
    }
  }

  async signin(dto: SingInDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user) throw new ForbiddenException('Credentilas Incorrect');

    const pwMatches = await argon.verify(user.password, dto.password);
    if (!pwMatches) throw new ForbiddenException('Credentiasl Inccorrect');
    return this.signToken(
      user.id,
      user.email,
      user.address,
      user.firstname,
      user.lastname,
      user.phone,
      user.identification,
      user.birthDate,
    );
  }

  async signToken(
    userId: number,
    email: string,
    firstname: string,
    lastname: string,
    address: string,
    phone: string,
    identification: string,
    birthDate: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
      firstname,
      lastname,
      address,
      phone,
      identification,
      birthDate,
    };

    const secret = this.config.get('JWT_SECRET');
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15min',
      secret: secret,
    });
    return {
      access_token: token,
    };
  }
}
