import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Response} from '@commons/schema/common/models/classes/response.class';
import {Post} from "@commons/schema/post/entities/post.entity";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getPost(postId: number): Observable<Response<Post>> {
    const url = `v1/posts/${postId}`;
    return this.httpClient.get<Response<Post>>(url);
  }

  getPosts(): Observable<Response<Post[]>> {
    const url = `v1/posts`;
    return this.httpClient.get<Response<Post>>(url);
  }
}
