

const DATA_SOURCE = "https://www.reddit.com/r/androiddev.json"

export default async function GET() {
    
    try {
        const response = await fetch(DATA_SOURCE);
    
        // Check if the request was successful (status code 200)
        if (response.ok) {
          const data = await response.json();

    
          // Process the data as needed
          let posts: Posts = data.data.children.map((post: Post) => ({
            title: post.data.title,
            author: post.data.author,
            thumbnail: post.data.thumbnail,
            url: post.data.url,
            media_metadata: post.data.media_metadata,

          }));
          return posts;
          // ...
        } else {
          console.error('Request failed with status code:', response.status);
        }
      } catch (error) {
        console.error('Request failed:', error);
      }
    };
