/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User extends Document {
    @Prop()
    email: string;

    @Prop()
    files: string[];

    @Prop()
    password: string;

    @Prop()
    createdAt: string;

    @Prop()
    updatedAt: string;

    @Prop()
    username: string;
}

export const UserSchema = SchemaFactory.createForClass(User);