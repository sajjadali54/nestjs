import { Controller, Get, Param, Post} from '@nestjs/common';

import { CATS_DATA } from './cats';
import { Cat } from './cats.model';


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
  create(): string {
    return 'This action adds a new cat';
  }
}
