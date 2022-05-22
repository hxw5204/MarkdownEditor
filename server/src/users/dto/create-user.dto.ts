import { IsEmail, IsString } from 'class-validator';
export class CreateUserDto {
  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;
  readonly createdAt: string;

  @IsString()
  readonly username: string;
}
