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

@Module({
  imports: [
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
