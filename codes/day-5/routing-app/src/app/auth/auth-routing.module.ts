import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const authRoutes: Routes = [
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'auth/register',
        component: RegisterComponent
    }
]
@NgModule({
    imports: [RouterModule.forRoot(authRoutes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
