import { IsNotEmpty, IsString, Length } from 'class-validator';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  @IsString()
  @Length(10)
  password: string;
}
