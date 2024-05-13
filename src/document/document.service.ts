/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Document, DocumentDocument } from './schema/document.schema';

@Injectable()
export class DocumentService {
    constructor(
        @InjectModel(Document.name)
        private documentModel: Model<DocumentDocument>,
    ) {}

    async create(userId: number, url: string): Promise<Document> {
        const createdDocument = new this.documentModel({ userId, url }) as unknown as Document;
        return createdDocument.save();
    }
}