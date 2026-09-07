import { Injectable } from '@nestjs/common';
import { CreateGaleriaDto } from './dto/create-galeria.dto';
import { UpdateGaleriaDto } from './dto/update-galeria.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GaleriaService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createGaleriaDto: CreateGaleriaDto) {
    return this.prisma.galeria.create({
      data: {
        subidoPorId: createGaleriaDto.subidoPorId,
        empleadoId: createGaleriaDto.empleadoId,
        imagenUrl: createGaleriaDto.imagenUrl,
        titulo: createGaleriaDto.titulo,
        descripcion: createGaleriaDto.descripcion,
        estilo: createGaleriaDto.estilo,
      },
    });
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