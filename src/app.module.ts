import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { EmpleadosModule } from './empleados/empleados.module';
import { HorariosTrabajadorModule } from './horarios-trabajador/horarios-trabajador.module';
import { GaleriaModule } from './galeria/galeria.module';
import { CitasModule } from './citas/citas.module';

@Module({
  imports: [PrismaModule, UsuariosModule, EmpleadosModule, HorariosTrabajadorModule, GaleriaModule, CitasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
