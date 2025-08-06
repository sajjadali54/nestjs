import { Controller, Get, Post, Redirect, Req } from '@nestjs/common';

import type { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  @Redirect('https://nestjs.com', 301)
  findAll(@Req() request: Request): string {
    console.log(request.query);
    return 'This action returns all cats';
  }

  @Post()
  create(): string {
    return 'This action adds a new cat';
  }
}
