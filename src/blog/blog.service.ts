import { Injectable } from '@nestjs/common';

interface BlogPost {
  id: number;
  title: string;
  content: string;
}

@Injectable()
export class BlogService {
  private readonly blogPosts: BlogPost[] = [];

  create(blogPost: BlogPost) {
    const lastId = this.blogPosts[this.blogPosts.length - 1]?.id || 0;
    const post = {
      title: blogPost.title,
      content: blogPost.content,
      id: lastId + 1,
    };
    this.blogPosts.push(post);
    return post;
  }

  findAll(): BlogPost[] {
    return this.blogPosts;
  }

  findOne(id: number): BlogPost | undefined {
    return this.blogPosts.find((post) => post.id === id);
  }

  update(id: number, updatedPost: Partial<BlogPost>): BlogPost | undefined {
    const postIndex = this.blogPosts.findIndex((post) => post.id === id);
    if (postIndex === -1) return undefined;

    this.blogPosts[postIndex] = {
      title: updatedPost.title || this.blogPosts[postIndex].title,
      content: updatedPost.content || this.blogPosts[postIndex].content,
      id: this.blogPosts[postIndex].id,
    };
    return this.blogPosts[postIndex];
  }

  remove(id: number): boolean {
    const postIndex = this.blogPosts.findIndex((post) => post.id === id);
    if (postIndex === -1) return false;
    this.blogPosts.splice(postIndex, 1);
    return true;
  }
}
