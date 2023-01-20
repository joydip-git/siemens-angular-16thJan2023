import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './common/components/dashboard/dashboard.component';
import { HomeComponent } from './common/components/home/home.component';
import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { PostsModule } from './posts/posts.module';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule, PostsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
