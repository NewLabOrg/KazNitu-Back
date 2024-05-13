/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { SignUpDto } from './dto/signup.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';


@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) 
        private userModel: Model<User>,
        private jwtService: JwtService,
    ) {}

    async signUp(signUpDto: SignUpDto): Promise<{token: string}> {
        const {name, email, password} = signUpDto

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await this.userModel.create({
            name,
            email,
            password: hashedPassword
        })

        const token = this.jwtService.sign({id: user._id})

        return { token }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async login(loginDto: LoginDto): Promise<{token: string}> { 
        const { email, password} = loginDto;

        const user = await this.userModel.findOne({ email })

        if(!user) {
            throw new UnauthorizedException('User not found')
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password)

        if(!isPasswordMatched) {
            throw new UnauthorizedException('User not found')
        }

        const token = this.jwtService.sign({id: user._id})  

        return { token };
    }

}
