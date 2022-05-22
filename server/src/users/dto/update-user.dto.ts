import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  readonly email?: string;
  readonly files?: string[];
  readonly password?: string;
  readonly updatedAt?: string;
  readonly username?: string;
}
