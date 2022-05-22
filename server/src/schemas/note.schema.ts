/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NoteDocument = Note & Document;

@Schema()
export class Note extends Document {
    @Prop()
    title: string;

    @Prop()
    author: string;

    @Prop()
    content: string;

    @Prop()
    assert: string[];

    @Prop()
    createAt: string;

    @Prop()
    updatedAt: string;
}

export const NoteSchema = SchemaFactory.createForClass(Note);