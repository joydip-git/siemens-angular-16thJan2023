import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/models/post';
import { ApiResponse, PostService } from 'src/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private sub?: Subscription;
  posts?: Post[];
  errorMessage = ''
  loading = true

  constructor(private svc: PostService) {

  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
  ngOnInit(): void {
    this.sub = this.svc
      .getPosts()
      .subscribe({
        next: (resp: ApiResponse<Post[]>) => {
          this.posts = resp.data
          this.loading = false
          this.errorMessage = ''
        },
        error: (err) => {
          this.posts = undefined
          this.loading = false
          this.errorMessage = err.message
        },
        complete: () => { }
      })
  }
  // posts: Post[] = [
  //   {
  //     userId: 1,
  //     id: 1,
  //     title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  //     body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  //   },
  //   {
  //     userId: 1,
  //     id: 2,
  //     title: "qui est esse",
  //     body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  //   },
  //   {
  //     userId: 1,
  //     id: 3,
  //     title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
  //     body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  //   }]


}
