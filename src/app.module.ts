import { Module } from '@nestjs/common';
import { ProductModule } from './prisma/Product/product.module';

@Module({
  imports: [ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
