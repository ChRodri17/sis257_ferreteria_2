import { Detalle } from 'src/detalle/entities/detalle.entity';

import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity('ventas')
export class Venta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  transaccion: string;

  @Column()
  fecha: Date;

  @Column({ name: 'id_usuario' })
  idUsuario: number;

  @Column({ name: 'id_cliente' })
  idCliente: number;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @OneToMany(() => Detalle, (detalle) => detalle.venta)
  detalles: Detalle[];
}
