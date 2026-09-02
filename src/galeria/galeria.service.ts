import { Injectable } from '@nestjs/common';
import { CreateGaleriaDto } from './dto/create-galeria.dto';
import { UpdateGaleriaDto } from './dto/update-galeria.dto';

@Injectable()
export class GaleriaService {
  create(createGaleriaDto: CreateGaleriaDto) {
    return 'This action adds a new galeria';
  }

  findAll() {
    return `This action returns all galeria`;
  }

  findOne(id: number) {
    return `This action returns a #${id} galeria`;
  }

  update(id: number, updateGaleriaDto: UpdateGaleriaDto) {
    return `This action updates a #${id} galeria`;
  }

  remove(id: number) {
    return `This action removes a #${id} galeria`;
  }
}
