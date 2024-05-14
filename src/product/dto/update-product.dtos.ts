import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateProduct {
  @IsString()
  @IsOptional()
  nombre: string;
  @IsString()
  @IsOptional()
  marca: string;
  @IsString()
  @IsOptional()
  description: string;
  @IsNumber()
  @IsOptional()
  price: number;
}
