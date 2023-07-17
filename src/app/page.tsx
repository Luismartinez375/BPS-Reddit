import getData, { PostClass } from './api/getPosts';
import CardItem from './components/cardItem/cardIem';
export default async function Home() {
  let postlist: PostClass[] | undefined = await getData();
  let posts = JSON.parse(JSON.stringify(postlist));
  // console.log(posts);

  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-l from-orange-700 to-orange-400 ">
      <div className="relative right-1/4 p-5">
        <h1 className="text-l font-roboto text-white">Posts</h1>
        <div className=" bg-postsDiv h-0.5 w-14 relative -left-2 "></div>
      </div>
      <ul className="flex flex-col items-center gap-5">
        {posts.map((post: PostClass) => {
          const keys: string[] | undefined = post.mediaMetadata
            ? Object.keys(post.mediaMetadata)
            : undefined;
          keys
            ? console.log(post.mediaMetadata[keys[0]].s.u)
            : console.log('no keys');
          return (
            <CardItem
              key={post.url}
              author={post.author}
              mediaMetadata={keys ? post.mediaMetadata[keys[0]].s.u : undefined}
              title={post.title}
              thumbnail={post.thumbnail}
              url={post.url}
            ></CardItem>
          );
        })}
      </ul>
    </main>
  );
}
