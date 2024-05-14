import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  Put,
  Get,
  Delete,
  Param,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreatedProduct } from './dto/create-product.dto';
import { UpdateProduct } from './dto/update-product.dtos';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  async createProduct(
    @Body(new ValidationPipe()) createProductDto: CreatedProduct,
  ) {
    return this.productService.create(createProductDto);
  }

  @Put(':id')
  async updateProduct(
    @Body(new ValidationPipe()) updateProductDto: UpdateProduct,
    @Param('id') id: string,
  ) {
    return this.productService.update(id, updateProductDto);
  }

  @Get()
  async getProducts() {
    return this.productService.findAll();
  }

  @Get(':id')
  async getProduct(@Param('id') id: string) {
    return this.productService.findById(id);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    return this.productService.delete(id);
  }
}
