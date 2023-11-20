import { CategoriaEntity } from 'src/categoria/entities/categoria.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ProductoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'id_categoria' })
  idCategoria: number;

  @Column({ length: 10 })
  codigo: string;

  @Column({ length: 30 })
  descripcion: string;

  @Column({ name: 'id_unidad' })
  idUnidad: number;

  @Column()
  precio: number;

  @Column({ name: 'existencia_producto' })
  existenciaProducto: number;

  @Column({ name: 'url_imagen', length: 5000 })
  urlImagen: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @ManyToOne(() => CategoriaEntity, (categoria) => categoria.productos)
  @JoinColumn({ name: 'id_categoria', referencedColumnName: 'id' })
  categoria: CategoriaEntity;
}
