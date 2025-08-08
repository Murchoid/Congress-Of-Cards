import { IsBoolean, IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  avatar?: string;

  @IsNumber()
  level?: number;

  @IsNumber()
  experience?: number;

  @IsBoolean()
  isActive?: boolean;

  @IsString()
  refreshToken?: string
}
