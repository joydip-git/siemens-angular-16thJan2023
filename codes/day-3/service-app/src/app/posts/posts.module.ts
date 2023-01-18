import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from 'src/services/post.service';

@NgModule({
    //registering modules
    imports: [CommonModule],
    //exporting assets of this module to other modules
    exports: [PostListComponent],
    //registering components, directives, pipes
    declarations: [PostListComponent],
    //registering services
    //providers: [PostService],
})
export class PostsModule { }
