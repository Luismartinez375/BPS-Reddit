import { JsonProperty, Serializable, deserialize } from 'ts-jackson';
const DATA_SOURCE = 'https://www.reddit.com/r/androiddev.json';

@Serializable()
export class PostClass {
  @JsonProperty(`data.title`)
  title: any;
  @JsonProperty('data.author')
  author: any;
  @JsonProperty('data.thumbnail')
  thumbnail: any;
  @JsonProperty('data.url')
  url: any;
  @JsonProperty('data.media_metadata')
  mediaMetadata: any;
}

export default async function getData() {
  try {
    const response = await fetch(DATA_SOURCE);

    // Check if the request was successful (status code 200)
    if (response.ok) {
      const data = await response.json();

      // Process the data as needed
      let posts: PostClass[] = data.data.children.map((post: any) =>
        deserialize(post, PostClass)
      );
      console.log(posts);
      return posts;
    } else {
      console.error('Request failed with status code:', response.status);
    }
  } catch (error) {
    console.error('Request failed:', error);
  }
}
