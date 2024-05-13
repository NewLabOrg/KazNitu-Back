/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Schema,  Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
    timestamps: true,
})
export class User {
        @Prop({ required: true })
        name: string
        
        @Prop({ required: true, unique: true})
        email: string

        @Prop({ required: true })
        password: string
}

export const UserSchema = SchemaFactory.createForClass(User); 