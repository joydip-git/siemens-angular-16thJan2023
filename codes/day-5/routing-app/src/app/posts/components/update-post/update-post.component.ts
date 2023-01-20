import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit, OnDestroy {
  post?: Post;
  errorMessage = ''
  loading = true
  postForm?: FormGroup;
  fetchSubscription?: Subscription;
  updateSubscription?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private svc: PostService,
    private builder: FormBuilder,
    private router: Router
  ) {
  }
  updateData() {
    const newPost = <Post>this.postForm?.value
    if (confirm('Would you like to update?')) {
      this.fetchSubscription = this.svc.updatePost(newPost).subscribe({
        next: (data) => {
          if (data && data !== null) {
            alert('product added successfully')
          }
        },
        error: (err) => {
          this.post = undefined
          this.loading = false
          this.errorMessage = err.message
        },
        complete: () => {
          this.router.navigate(['/posts'])
        }
      })
    }
  }
  get id() {
    return this.postForm?.get('id')
  }
  get userId() {
    return this.postForm?.get('userId')
  }
  get title() {
    return this.postForm?.get('title')
  }
  get body() {
    return this.postForm?.get('body')
  }
  ngOnInit(): void {
    const id = +(this.route.snapshot.params["id"])
    this.updateSubscription = this.svc.getPostById(id)
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
        },
        complete: () => {
          this.postForm = this.builder.group({
            id: [this.post?.id],
            userId: [this.post?.userId],
            title: [this.post?.title],
            body: [this.post?.body]
          })
        }
      })
  }
  ngOnDestroy(): void {
    this.fetchSubscription?.unsubscribe()
    this.updateSubscription?.unsubscribe()
  }
}
