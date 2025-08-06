import { Controller, Get, Req } from '@nestjs/common';

import type { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    console.log(request.query);
    return 'This action returns all cats';
  }
}
