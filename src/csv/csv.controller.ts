import { Controller, Get, Post, Put } from '@nestjs/common';
import { CsvService } from './csv.service';

@Controller('csv')
export class CsvController {
    constructor(private readonly csvService: CsvService) {}

    @Get()
    getCsv() {
        return this.csvService.getCsv();
    }
    // @Post()
    // @Put()
    // @Patch()
}
