import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WinesDocument = Wines & Document;

@Schema()
export class Wines {
  @Prop()
  title: string;

  @Prop()
  year: number;

  @Prop()
  description: string;
}

export const WinesSchema = SchemaFactory.createForClass(Wines);
