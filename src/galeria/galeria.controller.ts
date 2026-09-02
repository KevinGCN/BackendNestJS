import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GaleriaService } from './galeria.service';
import { CreateGaleriaDto } from './dto/create-galeria.dto';
import { UpdateGaleriaDto } from './dto/update-galeria.dto';

@Controller('galeria')
export class GaleriaController {
  constructor(private readonly galeriaService: GaleriaService) {}

  @Post()
  create(@Body() createGaleriaDto: CreateGaleriaDto) {
    return this.galeriaService.create(createGaleriaDto);
  }

  @Get()
  findAll() {
    return this.galeriaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.galeriaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGaleriaDto: UpdateGaleriaDto) {
    return this.galeriaService.update(+id, updateGaleriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.galeriaService.remove(+id);
  }
}
