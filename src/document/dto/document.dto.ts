/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";



export class DocumentDto {
    @ApiProperty({ type: 'array', items: { type: 'string', format: 'binary' } })
    files: any[];
    
    
  @ApiProperty()
    @IsNotEmpty()
    prospectId: number;
}