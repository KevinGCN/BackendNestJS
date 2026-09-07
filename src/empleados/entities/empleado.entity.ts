export class EmpleadoEntity {
  id!: number;
  usuarioId!: number;
  especialidad!: string | null;
  biografia!: string | null;
  fechaContratacion!: Date;
  activo!: boolean;
}