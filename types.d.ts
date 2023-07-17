type Post = {
    url: string;
    thumbnail: string;
    author: string;
    media_metadata: any;
    title: string;
    data: {
        title: string;
        author: string;
        thumbnail: string;
        url: string;
        media_metadata?: str


    }
}

type Posts = {
    data: Post[];
}

export type { Post, Posts };
