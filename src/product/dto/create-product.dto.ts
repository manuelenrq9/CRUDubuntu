import { IsString, IsNumber } from 'class-validator';

export class CreatedProduct {
  @IsString()
  nombre: string;
  @IsString()
  marca: string;
  @IsString()
  description: string;
  @IsNumber()
  price: number;
}
