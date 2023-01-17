import { Post } from "../models/post"

export class PostService {
    private url = 'https://jsonplaceholder.typicode.com/posts'
    // public get Url() {
    //     return this.url
    // }
    // public set Url(val: string) {
    //     this.url = val
    // }
    async getPosts(): Promise<Post[]> {
        try {
            const resp = await fetch(this.url)
            const data = await resp.json()
            return <Post[]>data
        } catch (error) {
            throw error
        }
    }
}