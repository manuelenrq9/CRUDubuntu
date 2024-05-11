import { Injectable } from '@nestjs/common';
import { PrimaService } from '../prisma.service';
import { Products } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private prisma: PrimaService) {} //PARA HACER CONSULTAS A LA BASE DE DATOS

  async getAllProducts(): Promise<Products[]> {
    //DEVUELVE UNA PROMESA DE UN ARRAY DE PRODUCTOS
    return this.prisma.products.findMany();
  }

  async getProductById(id: number): Promise<Products> {
    //DEVUELVE UNA PROMESA DE UN PRODUCTO
    return this.prisma.products.findUnique({
      where: { id },
    });
  }

  async createProduct(data: Products): Promise<Products> {
    //DEVUELVE UNA PROMESA DE UN PRODUCTO CREADO
    return this.prisma.products.create({ data });
  }

  async updateProduct(id: number, data: Products): Promise<Products> {
    //DEVUELVE UNA PROMESA DE UN PRODUCTO ACTUALIZADO
    return this.prisma.products.update({
      where: { id },
      data,
    });
  }

  async deleteProduct(id: number): Promise<Products> {
    //DEVUELVE UNA PROMESA DE UN PRODUCTO BORRADO
    return this.prisma.products.delete({
      where: { id },
    });
  }
}
