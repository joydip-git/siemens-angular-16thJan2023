import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Post } from './models/post';


export interface ApiResponse<T> {
    message: string;
    data: T
}

@Injectable({ providedIn: 'root' })
export class PostService {
    constructor(private httpClient: HttpClient) {

    }
    getPosts(): Observable<ApiResponse<Post[]>> {
        // const obs = this.httpClient.get('')
        // const obsPost =
        //     obs
        //         .pipe(
        //             map(
        //                 (data: any) => {
        //                     return <ApiResponse<Post[]>>data
        //                 }
        //             )
        //         )
        // return obsPost
        return this.httpClient.get<ApiResponse<Post[]>>('')
    }
}