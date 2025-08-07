import { Module } from '@nestjs/common';

import { PrismaService } from 'src/blog/prisma.service';

import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';

@Module({
  controllers: [BlogController],
  providers: [PrismaService, BlogService],
})
export class BlogModule {}
