import { Injectable } from '@nestjs/common';
import { CreateGaleriaDto } from './dto/create-galeria.dto';
import { UpdateGaleriaDto } from './dto/update-galeria.dto';

@Injectable()
export class GaleriaService {

  create(createGaleriaDto: CreateGaleriaDto) {
    return {
      message: 'Tatuaje agregado correctamente',
      data: createGaleriaDto,
    };
  }

  findAll() {
    return {
      message: 'Lista de tatuajes',
      data: [],
    };
  }

  findOne(id: number) {
    return {
      message: 'Tatuaje encontrado',
      data: {
        id,
      },
    };
  }

  update(id: number, updateGaleriaDto: UpdateGaleriaDto) {
    return {
      message: 'Tatuaje actualizado correctamente',
      data: {
        id,
        ...updateGaleriaDto,
      },
    };
  }

  remove(id: number) {
    return {
      message: 'Tatuaje eliminado correctamente',
      data: {
        id,
      },
    };
  }

  findByEmpleado(empleadoId: number) {
    return {
      message: 'Tatuajes del empleado',
      empleadoId,
      data: [],
    };
  }

  findByEstilo(estilo: string) {
    return {
      message: 'Tatuajes filtrados por estilo',
      estilo,
      data: [],
    };
  }

  findDetalle(id: number) {
    return {
      message: 'Detalle del tatuaje',
      data: {
        tatuaje: {
          id,
        },
        tatuador: null,
      },
    };
  }
}