import { HttpStatus } from '@nestjs/common';

export interface BlogPost {
  id: number;
  title: string;
  content: string;
}

export interface BlogResponse {
  status: HttpStatus;
  message: string;
}
