import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  filterText = '';
  postRecords?: Post[] | null;
  loading = true;
  errorMessage = '';
  constructor(private postSvc: PostService) {

  }
  ngOnInit(): void {
    this.postSvc.getPosts().subscribe({
      next: (resp) => {
        this.postRecords = resp
        this.loading = false
        this.errorMessage = ''
      },
      error: (err) => {
        this.postRecords = undefined
        this.loading = false
        this.errorMessage = err.message
      }
    })
  }
}
