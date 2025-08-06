import { Controller, Get, Param, Post, Redirect, Req } from '@nestjs/common';

import type { Request } from 'express';


@Controller('cats')
export class CatsController {
  private cats: { id: number; name: string; age: number }[] = [];

  constructor() {
    this.cats = [
      { id: 1, name: 'Whiskers', age: 2 },
      { id: 2, name: 'Felix', age: 4 },
      { id: 3, name: 'Garfield', age: 5 },
    ];
  }

  @Get()
  findAll(): { id: number; name: string; age: number }[] {
    return this.cats;
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `This action returns a #${id} cat`;
  }

  @Post()
  create(): string {
    return 'This action adds a new cat';
  }
}
