import { Module } from '@nestjs/common';
import { HorariosTrabajadorService } from './horarios-trabajador.service';
import { HorariosTrabajadorController } from './horarios-trabajador.controller';

@Module({
  controllers: [HorariosTrabajadorController],
  providers: [HorariosTrabajadorService],
})
export class HorariosTrabajadorModule {}
