import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://yoikerth0:wVR2h6pBBzU9cFuM@cluster0.gpdy3lu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
