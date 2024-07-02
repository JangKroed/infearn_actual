import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Expose } from 'class-transformer';

export type FileDocument = HydratedDocument<File>;

@Schema({
  collection: 'file',
})
export class File {
  @Expose()
  @Prop()
  _id: string;

  @Expose()
  @Prop({ required: true })
  name: string;

  @Expose()
  @Prop({ default: [] })
  size: Array<string | undefined>;

  @Expose()
  @Prop({ required: true })
  user_id: string;

  @Expose()
  @Prop({ required: true })
  type: string;

  @Expose()
  @Prop({ required: true })
  dpasset_id: string;

  @Expose()
  @Prop({ default: new Date() })
  created_date: Date;
}

export const FileSchema = SchemaFactory.createForClass(File);
