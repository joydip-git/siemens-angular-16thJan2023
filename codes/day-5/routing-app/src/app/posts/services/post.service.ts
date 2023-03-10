import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://localhost:3000/posts'

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url)
  }
  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.url}/${id}`)
  }
  updatePost(post: Post) {
    return this.http.put(`${this.url}/${post.id}`, post)
  }
}
