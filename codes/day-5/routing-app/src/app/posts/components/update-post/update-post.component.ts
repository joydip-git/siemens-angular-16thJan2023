import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  post?: Post;
  errorMessage = ''
  loading = true
  postForm?: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private svc: PostService,
    private builder: FormBuilder,
    private router: Router
  ) {
    // this.postForm = this.builder.group({
    //   id: [0],
    //   userId: [0],
    //   title: [''],
    //   body: ['']
    // })
  }
  updateData() {
    const newPost = <Post>this.postForm?.value
    if (confirm('Would you like to update?')) {
      this.svc.updatePost(newPost).subscribe({
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
          // this.id?.setValue(this.post?.id)
          // this.id?.setValue(this.post?.id)
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
    this.svc.getPostById(id)
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
          // this.id?.setValue(this.post?.id)
          // this.id?.setValue(this.post?.id)
          this.postForm = this.builder.group({
            id: [this.post?.id],
            userId: [this.post?.userId],
            title: [this.post?.title],
            body: [this.post?.body]
          })
        }
      })
  }
}
