import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './interfaces/post.interface';
import { CreatePostDTO } from './dto/create-post.dto';

@Injectable()
export class BlogService {
  constructor(@InjectModel('Post') private readonly postModel: Model<Post>) { }

  async getPosts(): Promise<Post[]> {
    return await this.postModel.find().exec();
  }

  async getPost(postID): Promise<Post> {
    return await this.postModel
      .findById(postID)
      .exec();
  }

  async addPost(createPostDTO: CreatePostDTO): Promise<Post> {
    const newPost = await this.postModel(createPostDTO);
    return newPost.save();
  }

  async editPost(postID, createPostDTO: CreatePostDTO): Promise<Post> {
    return await this.postModel
      .findByIdAndUpdate(postID, createPostDTO, { new: true, useFindAndModify: false });
  }

  async deletePost(postID): Promise<any> {
    return await this.postModel
      .findByIdAndRemove(postID);
  }
}
