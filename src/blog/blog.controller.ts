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

import type { BlogPost, BlogResponse } from './blog.interface';
import { BlogService } from './blog.service';

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
  async findOne(@Param('id') id: string): Promise<BlogPost | BlogResponse> {
    const post = await this.blogService.findOne(+id);
    if (!post)
      return { status: HttpStatus.NOT_FOUND, message: 'Blog post not found.' };
    return post;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatedPost: Partial<BlogPost>,
  ): Promise<BlogPost | BlogResponse> {
    const post = await this.blogService.update(+id, updatedPost);
    if (!post)
      return { status: HttpStatus.NOT_FOUND, message: 'Blog post not found.' };
    return post;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<BlogResponse> {
    const isRemoved = await this.blogService.remove(+id);
    return isRemoved
      ? { status: HttpStatus.OK, message: 'Blog post successfully deleted.' }
      : { status: HttpStatus.NOT_FOUND, message: 'Blog post not found.' };
  }
}
