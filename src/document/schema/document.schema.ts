/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document as MongooseDocument } from 'mongoose';

export type DocumentDocument = MongooseDocument & Document;

@Schema()
export class Document {
    [x: string]: any;
    @Prop()
    userId: number;

    @Prop()
    url: string;
}

export const DocumentSchema = SchemaFactory.createForClass(Document);