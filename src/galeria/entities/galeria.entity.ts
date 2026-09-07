export class GaleriaEntity {
  id!: number;
  subidoPorId!: number;
  empleadoId!: number | null;
  imagenUrl!: string;
  titulo!: string | null;
  descripcion!: string | null;
  estilo!: string | null;
  fechaSubida!: Date;
}