import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { Blog } from 'generated/prisma';

import type { BlogPost, BlogResponse } from './blog.interface';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  async create(@Body() blogPost: BlogPost): Promise<Blog> {
    const post = await this.blogService.create(blogPost);
    return post;
  }

  @Get()
  async findAll(): Promise<Blog[]> {
    return this.blogService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Blog | BlogResponse> {
    const post = await this.blogService.findOne(+id);
    if (!post)
      return { status: HttpStatus.NOT_FOUND, message: 'Blog post not found.' };
    return post;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatedPost: Partial<Blog>,
  ): Promise<Blog | BlogResponse> {
    const post = await this.blogService.update({
      where: { id: +id },
      data: updatedPost,
    });
    if (!post)
      return { status: HttpStatus.NOT_FOUND, message: 'Blog post not found.' };
    return post;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<BlogResponse> {
    const isRemoved = await this.blogService.remove({ id: +id });
    return isRemoved
      ? { status: HttpStatus.OK, message: 'Blog post successfully deleted.' }
      : { status: HttpStatus.NOT_FOUND, message: 'Blog post not found.' };
  }
}
