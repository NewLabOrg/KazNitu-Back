/* eslint-disable prettier/prettier */
// document.controller.ts
import { Controller, Post, UploadedFiles, UseInterceptors, Request } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { DocumentService } from './document.service';
import { ApiBody, ApiOperation, ApiTags, ApiConsumes } from '@nestjs/swagger';


@ApiTags('documents')
@Controller('documents')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('files'))
  @ApiOperation({ summary: 'Upload files' })
  @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
        type: 'object',
        properties: {
            files: {
            type: 'array',
            items: {
                type: 'string',
                format: 'binary',
            },
            },
        },
        },
    })
  async uploadFile(@UploadedFiles() files, @Request() req) {
    const userId = req.user.id; 

    const urls = files.map(file => {
      const url = `/${userId}/${file.originalname.trim().split(' ').join('_')}`;
      this.documentService.create(userId, url);
      return url;
    });
    
    return { urls };
  }
}