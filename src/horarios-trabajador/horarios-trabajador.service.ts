import { Injectable } from '@nestjs/common';
import { CreateHorariosTrabajadorDto } from './dto/create-horarios-trabajador.dto';
import { UpdateHorariosTrabajadorDto } from './dto/update-horarios-trabajador.dto';

@Injectable()
export class HorariosTrabajadorService {
  create(createHorariosTrabajadorDto: CreateHorariosTrabajadorDto) {
    return 'This action adds a new horariosTrabajador';
  }

  findAll() {
    return `This action returns all horariosTrabajador`;
  }

  findOne(id: number) {
    return `This action returns a #${id} horariosTrabajador`;
  }

  update(id: number, updateHorariosTrabajadorDto: UpdateHorariosTrabajadorDto) {
    return `This action updates a #${id} horariosTrabajador`;
  }

  remove(id: number) {
    return `This action removes a #${id} horariosTrabajador`;
  }
}
