import { Body, Controller, Get, Param, Post} from '@nestjs/common';

import { CATS_DATA } from './cats';
import { CreateCatDto, Cat } from './create-cat.dto';


@Controller('cats')
export class CatsController {
  private cats: Cat[] = [];

  constructor() {
    this.cats = CATS_DATA;
  }
  
  @Get()
  findAll(): Cat[] {
    return this.cats;
  }

  @Get(':id')
  findOne(@Param('id') id: string): string | Cat {
    const cat = this.cats.find((cat) => cat.id.toString() === id);
    return cat || 'Cat not found';
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto): Cat {
    const lastCat = this.cats[this.cats.length - 1];
    const newCat = {
      name: createCatDto.name,
      age: createCatDto.age,
      breed: createCatDto.breed,
      id: lastCat.id + 1,
    };
    this.cats.push(newCat);
    return newCat;
  }
}
