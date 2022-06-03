import {Post} from "@commons/schema/post/entities/post.entity";

export interface PostState {
  post: Post;
  posts: Post[];
}
