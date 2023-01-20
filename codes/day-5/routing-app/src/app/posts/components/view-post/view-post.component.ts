import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Router } from "@angular/router";
import { Subscription } from 'rxjs';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit, OnDestroy {

  errorMessage = ''
  loading = true
  post?: Post;
  subscription?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private postSvc: PostService,
    private router: Router
  ) {

  }
  gotoEdit() {
    this.router.navigate(['/posts/update', this.post?.id])
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
  ngOnInit(): void {
    // const snapshot: ActivatedRouteSnapshot = this.route.snapshot
    // const allParams: Params = snapshot.params
    // console.log(allParams['id'])
    const id = +(this.route.snapshot.params['id'])
    this.subscription =
      this.postSvc.getPostById(id)
        .subscribe({
          next: (data) => {
            this.post = data
            this.loading = false
            this.errorMessage = ''
          },
          error: (err) => {
            this.post = undefined
            this.loading = false
            this.errorMessage = err.message
          }
        })
  }
}
