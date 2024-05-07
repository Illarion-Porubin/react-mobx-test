import { makeAutoObservable } from "mobx";
import { Posts, getPosts } from "../api/getPosts";
import { IPromiseBasedObservable, fromPromise } from "mobx-utils";

class PostsStore {
    // posts: Posts[] = [];
    posts?: IPromiseBasedObservable<Posts[]>
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    // getPostsAction = async () => {
    //     try {
    //         this.isLoading = true;
    //         const res = await getPosts();
    //         runInAction(() => {
    //             this.posts = res;
    //             this.isLoading = false;
    //         })
    //     } catch {
    //         this.isLoading = false;
    //     }
    // }
    getPostsAction = () => {
        this.posts = fromPromise(getPosts())
    }
}

export default new PostsStore();