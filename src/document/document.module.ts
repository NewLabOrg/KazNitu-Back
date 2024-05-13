/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { DocumentController } from './documet.controller';
import {  DocumentSchema } from './schema/document.schema';
import { DocumentService } from './document.service'; 

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Document',
                schema: DocumentSchema,
            },
        ]),
        ConfigModule,
    ],
    controllers: [DocumentController],
    providers: [DocumentService],
})
export class DocumentModule {}