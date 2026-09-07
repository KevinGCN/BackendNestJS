import { Module } from '@nestjs/common';
import { GaleriaService } from './galeria.service';
import { GaleriaController } from './galeria.controller';

@Module({
  controllers: [GaleriaController],
  providers: [GaleriaService],
})
export class GaleriaModule {}
