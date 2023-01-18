import { Injectable } from "@angular/core";
import { posts } from "src/repository/posts";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class PostService {
    // constructor(private http: HttpClient) {

    // }
    getPosts() {
        return [...posts]
    }
}
/*
//spread opertor (...)

 const numbers = [1, 2, 3, 4]
        const copyNums = [...numbers]
        const obj: any = {
            name: 'anil',
            id: 1,
            salary: 1000
        }
        var copy = { ...obj }
        //var copy = Object.assign({}, obj)
        //var copy: any = {}

        // for (const propName in obj) {
        //     const propValue = obj[propName]
        //     copy[propName] = propValue
        // }
*/