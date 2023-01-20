import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postForm: FormGroup;
  constructor(private builder: FormBuilder) {
    // this.postForm = new FormGroup({
    //   id: new FormControl(0),
    //   userId: new FormControl(0),
    //   body: new FormControl(''),
    //   title: new FormControl(''),
    // })
    this.postForm = builder.group({
      id: [0],
      userId: [0],
      body: [''],
      title: [''],
    })
  }
  get id() {
    return this.postForm.get('id')?.value
  }
  get userId() {
    return this.postForm.get('userId')?.value
  }
  get title() {
    return this.postForm.get('title')?.value
  }
  get body() {
    return this.postForm.get('body')?.value
  }
  submitData() {
    //const postData = <Post>this.postForm.value
    //const postData = new Post(id,this.userId,)
    console.log(this.postForm.value)
  }
}
