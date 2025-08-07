import { Injectable } from '@nestjs/common';

import { Blog, Prisma } from '@prisma/client';

import { PrismaService } from 'src/blog/prisma.service';

@Injectable()
export class BlogService {
  constructor(private prisma: PrismaService) {}

  async create(blogPost: Prisma.BlogCreateInput): Promise<Blog> {
    return this.prisma.blog.create({
      data: {
        title: blogPost.title,
        content: blogPost.content,
      },
    });
  }

  async findAll(params?: {
    skip?: number;
    take?: number;
    cursor?: Prisma.BlogWhereUniqueInput;
    where?: Prisma.BlogWhereInput;
    orderBy?: Prisma.BlogOrderByWithRelationInput;
  }): Promise<Blog[]> {
    const { skip, take, cursor, where, orderBy } = params!;
    return this.prisma.blog.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findOne(id: number): Promise<Blog | null> {
    return this.prisma.blog.findUnique({ where: { id } });
  }

  async update(params: {
    where: Prisma.BlogWhereUniqueInput;
    data: Prisma.BlogUpdateInput;
  }): Promise<Blog> {
    const { where, data } = params;
    return this.prisma.blog.update({
      data,
      where,
    });
  }

  async remove(where: Prisma.BlogWhereUniqueInput): Promise<Blog> {
    return this.prisma.blog.delete({
      where,
    });
  }
}
