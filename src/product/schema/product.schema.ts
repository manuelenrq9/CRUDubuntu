import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Product {
  @Prop()
  nombre: string;
  @Prop()
  marca: string;
  @Prop()
  description: string;
  @Prop()
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
