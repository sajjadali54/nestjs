import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { CatsService } from './cats.service';

import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Cat> {
    const idNumber = Number(id);
    // console.log(this.catsService.findAll());
    const cat = this.catsService.findOne(idNumber);
    return cat;
  }
}
