import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class productSchema extends Document {
  @Prop()
  nombre: string;
  @Prop()
  marca: string;
  @Prop()
  description: string;
  @Prop()
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(productSchema);
