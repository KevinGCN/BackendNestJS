import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateGaleriaDto } from './dto/create-galeria.dto';
import { UpdateGaleriaDto } from './dto/update-galeria.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GaleriaService {
  constructor(private readonly prisma: PrismaService) {}

  // CREAR TATUAJE
  async create(createGaleriaDto: CreateGaleriaDto) {
    const tatuaje = await this.prisma.galeria.create({
      data: {
        subidoPorId: createGaleriaDto.subidoPorId,
        empleadoId: createGaleriaDto.empleadoId,
        imagenUrl: createGaleriaDto.imagenUrl,
        titulo: createGaleriaDto.titulo,
        descripcion: createGaleriaDto.descripcion,
        estilo: createGaleriaDto.estilo,
      },
    });

    return {
      message: 'Tatuaje agregado correctamente',
      data: tatuaje,
    };
  }

  // OBTENER TODOS LOS TATUAJES
  async findAll() {
    const tatuajes = await this.prisma.galeria.findMany({
      orderBy: {
        fechaSubida: 'desc',
      },
    });

    return {
      message: 'Lista de tatuajes',
      data: tatuajes,
    };
  }

  // OBTENER UN TATUAJE POR ID
  async findOne(id: number) {
    const tatuaje = await this.prisma.galeria.findUnique({
      where: {
        id,
      },
    });

    if (!tatuaje) {
      throw new NotFoundException('Tatuaje no encontrado');
    }

    return {
      message: 'Tatuaje encontrado',
      data: tatuaje,
    };
  }

  // ACTUALIZAR TATUAJE
  async update(id: number, updateGaleriaDto: UpdateGaleriaDto) {
    const tatuaje = await this.prisma.galeria.findUnique({
      where: {
        id,
      },
    });

    if (!tatuaje) {
      throw new NotFoundException('Tatuaje no encontrado');
    }

    const tatuajeActualizado = await this.prisma.galeria.update({
      where: {
        id,
      },
      data: updateGaleriaDto,
    });

    return {
      message: 'Tatuaje actualizado correctamente',
      data: tatuajeActualizado,
    };
  }

  // ELIMINAR TATUAJE
  async remove(id: number) {
    const tatuaje = await this.prisma.galeria.findUnique({
      where: {
        id,
      },
    });

    if (!tatuaje) {
      throw new NotFoundException('Tatuaje no encontrado');
    }

    const tatuajeEliminado = await this.prisma.galeria.delete({
      where: {
        id,
      },
    });

    return {
      message: 'Tatuaje eliminado correctamente',
      data: tatuajeEliminado,
    };
  }

  // OBTENER TATUAJES DE UN EMPLEADO
  async findByEmpleado(empleadoId: number) {
    const tatuajes = await this.prisma.galeria.findMany({
      where: {
        empleadoId,
      },
      orderBy: {
        fechaSubida: 'desc',
      },
    });

    return {
      message: 'Tatuajes del empleado',
      empleadoId,
      data: tatuajes,
    };
  }

  // FILTRAR POR ESTILO
  async findByEstilo(estilo: string) {
    const tatuajes = await this.prisma.galeria.findMany({
      where: {
        estilo: {
          equals: estilo,
          mode: 'insensitive',
        },
      },
      orderBy: {
        fechaSubida: 'desc',
      },
    });

    return {
      message: 'Tatuajes filtrados por estilo',
      estilo,
      data: tatuajes,
    };
  }

  // OBTENER TATUAJE + INFORMACIÓN DEL TATUADOR
  async findDetalle(id: number) {
    const tatuaje = await this.prisma.galeria.findUnique({
      where: {
        id,
      },
      include: {
        empleado: {
          include: {
            usuario: true,
          },
        },
      },
    });

    if (!tatuaje) {
      throw new NotFoundException('Tatuaje no encontrado');
    }

    return {
      message: 'Detalle del tatuaje',
      data: {
        tatuaje,
        tatuador: tatuaje.empleado,
      },
    };
  }
}