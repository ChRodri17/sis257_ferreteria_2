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
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '**/*.entity.ts'],
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
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
