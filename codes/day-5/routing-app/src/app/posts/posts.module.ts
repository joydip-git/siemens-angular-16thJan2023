import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { UpdatePostComponent } from './components/update-post/update-post.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FilterPostComponent } from './components/filter-post/filter-post.component';
import { PostFilterPipe } from './pipes/post-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../auth/guards/auth.guard';

const postRoutes: Routes = [
  {
    path: 'posts',
    canActivate: [AuthGuard],
    children: [{
      path: '',
      component: PostListComponent
    },
    {
      path: 'add',
      component: AddPostComponent
    },
    {
      path: 'update/:id',
      component: UpdatePostComponent
    },
    {
      path: 'view/:id',
      component: ViewPostComponent
    }]
  }

]

@NgModule({
  declarations: [
    PostListComponent,
    AddPostComponent,
    ViewPostComponent,
    UpdatePostComponent,
    FilterPostComponent,
    PostFilterPipe
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule, RouterModule.forRoot(postRoutes)
  ]
})
export class PostsModule { }
