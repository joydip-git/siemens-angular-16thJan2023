import { Component } from '@angular/core';
import { Post } from 'src/models/post';
import { PostService } from 'src/services/post.service';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    //providers: [PostService]
})

export class PostListComponent {
    postData?: Post[] | null;

    constructor(private svcRef: PostService) {
        this.postData = this.svcRef.getPosts()
    }
}