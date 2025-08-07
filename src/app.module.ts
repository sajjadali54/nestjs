import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { BlogModule } from './blog/blog.module';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule, BlogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
