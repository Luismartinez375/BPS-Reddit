type Post = {
  
    data: {
        title: string;
        author: string;
        thumbnail: string;
        url: string;
        media_metadata?: any


    }
}

type Posts = {
    data: Post[];
}