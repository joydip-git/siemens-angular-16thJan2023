import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './common/components/dashboard/dashboard.component';
import { HomeComponent } from './common/components/home/home.component';
import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from './common/interceptors/app.interceptor';

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
    BrowserModule, PostsModule, RouterModule.forRoot(appRoutes),
    AuthModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
