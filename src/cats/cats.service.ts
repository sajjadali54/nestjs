import { Injectable } from '@nestjs/common';

import { CATS_DATA } from './cats';

import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = CATS_DATA;

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: number): Cat | undefined {
    const cat = this.cats.find((cat) => cat.id === id);
    console.log('Found Cat', cat);
    return cat;
  }
}
