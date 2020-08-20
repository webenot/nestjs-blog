import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogSchema } from './schemas/blog.schema';

@Module({
  providers: [ BlogService ],
  controllers: [ BlogController ],
  imports: [
    MongooseModule.forFeature([ { name: 'Post', schema: BlogSchema } ])
  ],
})
export class BlogModule {
}
