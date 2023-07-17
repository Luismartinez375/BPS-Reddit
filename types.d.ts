import { Serializable } from "ts-jackson";

@Serializable()
type Post = {
    url: string;
    thumbnail: string;
    author: string;
    mediaMetadata?: any;
    title: string;
    data: {
        title: string;
        author: string;
        thumbnail: string;
        url: string;
        mediaMetadata?: any


    }
}
type Posts = {
    data: Post[];
}



    export type { Post, Posts };

