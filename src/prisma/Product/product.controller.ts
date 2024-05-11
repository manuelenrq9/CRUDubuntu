import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Products } from '@prisma/client';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Post()
  async createProduct(@Body() data: Products) {
    return this.productService.createProduct(data);
  }

  @Get(':id')
  async getProductById(@Param('id') id: string) {
    const productFound = await this.productService.getProductById(Number(id));
    if (!productFound) throw new NotFoundException('Product not found');
    return productFound;
  }

  @Put(':id')
  async updateProduct(@Param('id') id: string, @Body() data: Products) {
    try {
      return await this.productService.updateProduct(Number(id), data);
    } catch (error) {
      throw new NotFoundException('Product not exist');
    }
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    try {
      return await this.productService.deleteProduct(Number(id));
    } catch (error) {
      throw new NotFoundException('Product not exist');
    }
  }
}