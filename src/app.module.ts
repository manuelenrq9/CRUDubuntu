import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot(
      'mongodb://10.84.37.113:27017,10.84.37.228:27017,10.84.37.222:27017/?replicaSet=myReplicaSet',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
