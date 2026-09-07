import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  MinLength,
} from 'class-validator';

export class CreateGaleriaDto {
  @IsNotEmpty()
  @IsInt()
  subidoPorId!: number;

  @IsOptional()
  @IsInt()
  empleadoId?: number;

  @IsNotEmpty()
  @IsString()
  @IsUrl()
  imagenUrl!: string;

  @IsOptional()
  @IsString()
  @MinLength(3)
  titulo?: string;

  @IsOptional()
  @IsString()
  @MinLength(10)
  descripcion?: string;

  @IsOptional()
  @IsString()
  estilo?: string;
}