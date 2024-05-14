import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot(
      'mongodb+srv://yoikerth0:nube@cluster0.4utjvkr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
