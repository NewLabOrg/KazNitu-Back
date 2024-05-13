/* eslint-disable prettier/prettier */
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MulterModule } from '@nestjs/platform-express';
import { DocumentModule } from './document/document.module';

@Module({
  imports: [
    ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: '.env'
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AuthModule,
    DocumentModule,
    MulterModule.register({ 
      dest: './uploads',
     })
  ],
})
export class AppModule {}