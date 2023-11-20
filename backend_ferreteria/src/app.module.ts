import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaModule } from './categoria/categoria.module';
import { ClienteModule } from './cliente/cliente.module';
import { DetalleModule } from './detalle/detalle.module';
import { UnidadModule } from './unidad/unidad.module';
import { ProductoModule } from './producto/producto.module';
import { UsuarioModule } from './usuario/usuario.module';
import { VentaModule } from './venta/venta.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaEntity } from './categoria/entities/categoria.entity';
import { ProductoEntity } from './producto/entities/producto.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'usrferreteria',
      password: 'sis257_fe',
      database: 'sis257_ferreteria',
      entities: [CategoriaEntity, ProductoEntity],
      synchronize: true,
      autoLoadEntities: true,
    }),
    CategoriaModule,
    ClienteModule,
    DetalleModule,
    UnidadModule,
    ProductoModule,
    UsuarioModule,
    VentaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
