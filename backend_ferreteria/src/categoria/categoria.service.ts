import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>,
  ) {}

  async create(createCategoriaDto: CreateCategoriaDto): Promise<Categoria> {
    const existe = await this.categoriaRepository.findOneBy({
      descripcion: createCategoriaDto.descripcion.trim(),
    });

    if (existe) {
      throw new ConflictException(
        `La categoria ${createCategoriaDto.descripcion} ya existe.`,
      );
    }

    return this.categoriaRepository.save({
      descripcion: createCategoriaDto.descripcion.trim(),
    });
  }

  async findAll(): Promise<Categoria[]> {
    return this.categoriaRepository.find();
  }

  async findOne(id: number): Promise<Categoria> {
    const categoria = await this.categoriaRepository.findOneBy({ id });

    if (!categoria) {
      throw new NotFoundException(`La categoria ${id} no existe.`);
    }

    return categoria;
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    const categoria = await this.categoriaRepository.findOneBy({ id });

    if (!categoria) {
      throw new NotFoundException(`La categoria ${id} no existe.`);
    }

    const categoriaUpdate = Object.assign(categoria, updateCategoriaDto);
    return this.categoriaRepository.save(categoriaUpdate);
  }

  async remove(id: number) {
    const existe = await this.categoriaRepository.findOneBy({ id });

    if (!existe) {
      throw new NotFoundException(`La categoria ${id} no existe.`);
    }

    return this.categoriaRepository.delete(id);
  }
}
