import { PartialType } from '@nestjs/mapped-types';
import { CreateHorariosTrabajadorDto } from './create-horarios-trabajador.dto';

export class UpdateHorariosTrabajadorDto extends PartialType(CreateHorariosTrabajadorDto) {}
