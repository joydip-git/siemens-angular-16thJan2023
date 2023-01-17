/*
class Post {
    // userId: number;
    // id: number;
    // title: string;
    // body: string;
    // constructor(userid: number, id: number, title: string, body: string) {
    //     this.userId = userid
    //     this.id = id
    //     this.title = title
    //     this.body = body
    // }
    constructor(public userId: number, public id: number, public title: string, public body: string) {

    }
}
*/
export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}


/*
class PostInfo implements Post {
    constructor(public userId: number, public id: number, public title: string, public body: string) {

    }
}
*/

/*
interface IOperations {
    get(): void;
    post(): void;
}
class Operations implements IOperations{
    get(): void {
        throw new Error("Method not implemented.");
    }
    post(): void {
        throw new Error("Method not implemented.");
    }
  
}
*/