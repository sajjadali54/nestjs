import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { BlogService, type BlogPost } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  async create(@Body() blogPost: BlogPost): Promise<BlogPost> {
    const post = await this.blogService.create(blogPost);
    return post;
  }

  @Get()
  findAll(): BlogPost[] {
    return this.blogService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<BlogPost | undefined> {
    const post = await this.blogService.findOne(+id);
    return post;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatedPost: Partial<BlogPost>,
  ): Promise<BlogPost | undefined> {
    return this.blogService.update(+id, updatedPost);
  }

  @Delete(':id')
  async remove(
    @Param('id') id: string,
  ): Promise<{ status: HttpStatus; message: string }> {
    const isRemoved = await this.blogService.remove(+id);
    return isRemoved
      ? { status: HttpStatus.OK, message: 'Blog post successfully deleted.' }
      : { status: HttpStatus.NOT_FOUND, message: 'Blog post not found.' };
  }
}
