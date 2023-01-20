import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private httpClient: HttpClient) { }
    //authenticate(user: User):Observable<ApiResponse<string>> {
    authenticate(user: User) {
        return this.httpClient.post<string>('', user)
    }
}