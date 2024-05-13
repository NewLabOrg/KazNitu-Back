/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
    @IsNotEmpty()
    @IsEmail({}, { message: 'Invalid email' })
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6, { message: 'Password is too short' })
    readonly password: string;
}