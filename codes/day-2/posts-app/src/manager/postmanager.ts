import { Post } from "../models/post";
import { PostService } from "../services/postservice";

export class PostManager {
    private postServiceRef: PostService;

    constructor() {
        this.postServiceRef = new PostService()
    }

    async fetchPosts(): Promise<Post[]> {
        try {
            const allPosts = await this.postServiceRef.getPosts()
            return allPosts.slice(0, 10)
        } catch (error) {
            throw error
        }
    }
}