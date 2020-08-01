import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

import { SerieStatus } from './serie-status.enum';

@Schema()
export class Serie extends Document {
  @Prop()
  name: string;

  @Prop()
  bio: string

  @Prop()
  status: SerieStatus
}

export const SerieSchema = SchemaFactory.createForClass(Serie);