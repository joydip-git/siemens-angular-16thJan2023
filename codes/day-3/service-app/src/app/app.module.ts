import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PostService } from 'src/services/post.service';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { PostsModule } from './posts/posts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, PostsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
