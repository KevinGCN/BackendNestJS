import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { CreateGaleriaDto } from './dto/create-galeria.dto';
import { UpdateGaleriaDto } from './dto/update-galeria.dto';
import { GaleriaService } from './galeria.service';

@Controller('galeria')
export class GaleriaController {
  constructor(
    private readonly galeriaService: GaleriaService,
  ) {}

  @Get('empleado/:id')
  findByEmpleado(@Param('id') id: string) {
    return this.galeriaService.findByEmpleado(+id);
  }

  @Get('estilo/:estilo')
  findByEstilo(@Param('estilo') estilo: string) {
    return this.galeriaService.findByEstilo(estilo);
  }

  @Get(':id/detalle')
  findDetalle(@Param('id') id: string) {
    return this.galeriaService.findDetalle(+id);
  }

  @Post()
  create(@Body() createGaleriaDto: CreateGaleriaDto) {
    return this.galeriaService.create(createGaleriaDto);
  }

  @Get()
  findAll(@Query('estilo') estilo?: string) {
    if (estilo) {
      return this.galeriaService.findByEstilo(estilo);
    }

    return this.galeriaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.galeriaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGaleriaDto: UpdateGaleriaDto,
  ) {
    return this.galeriaService.update(+id, updateGaleriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.galeriaService.remove(+id);
  }
}