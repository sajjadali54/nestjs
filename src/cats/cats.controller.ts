import { Controller, Get, Param, Post, Redirect, Req } from '@nestjs/common';

import type { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  @Redirect('https://nestjs.com', 301)
  findAll(@Req() request: Request): string {
    console.log(request.query);
    return 'This action returns all cats';
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
