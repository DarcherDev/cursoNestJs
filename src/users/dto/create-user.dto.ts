import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'El correo electrónico del usuario',
    example: 'usuario@ejemplo.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'El nombre del usuario (opcional)',
    example: 'Juan Perez',
    required: false,
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    description: 'La contraseña del usuario (mínimo 6 caracteres)',
    example: 'passwordSeguro123',
    minLength: 6,
  })
  @IsString()
  @MinLength(6)
  password: string;
}
