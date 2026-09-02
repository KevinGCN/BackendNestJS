import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HorariosTrabajadorService } from './horarios-trabajador.service';
import { CreateHorariosTrabajadorDto } from './dto/create-horarios-trabajador.dto';
import { UpdateHorariosTrabajadorDto } from './dto/update-horarios-trabajador.dto';

@Controller('horarios-trabajador')
export class HorariosTrabajadorController {
  constructor(private readonly horariosTrabajadorService: HorariosTrabajadorService) {}

  @Post()
  create(@Body() createHorariosTrabajadorDto: CreateHorariosTrabajadorDto) {
    return this.horariosTrabajadorService.create(createHorariosTrabajadorDto);
  }

  @Get()
  findAll() {
    return this.horariosTrabajadorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.horariosTrabajadorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHorariosTrabajadorDto: UpdateHorariosTrabajadorDto) {
    return this.horariosTrabajadorService.update(+id, updateHorariosTrabajadorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.horariosTrabajadorService.remove(+id);
  }
}
