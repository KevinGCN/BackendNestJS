import {
  IsNotEmpty,
  IsInt,
  IsOptional,
  IsString,
  MinLength,
  IsDateString,
  IsBoolean,
} from 'class-validator';

export class CreateEmpleadoDto {
  @IsNotEmpty()
  @IsInt()
  usuarioId!: number;

  @IsOptional()
  @IsString()
  @MinLength(3)
  especialidad?: string;

  @IsOptional()
  @IsString()
  biografia?: string;

  @IsOptional()
  @IsDateString()
  fechaContratacion?: string;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}