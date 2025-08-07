import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CatsModule } from './cats/cats.module';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [CatsModule, BlogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
