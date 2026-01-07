import { IsString, MinLength } from 'class-validator';

export class CreateTaskDto {

  @IsString()
  @MinLength(1)
  titel: string;

  @IsString()
  @MinLength(1)
  descricion: string;
}
