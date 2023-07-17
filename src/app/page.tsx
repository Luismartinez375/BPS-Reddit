import { Post, Posts } from "../../types";
import getData from "./api/route";
import CardItem from "./components/cardItem/cardIem";
export default async function Home() {
   
  let postlist: Posts | undefined= await getData()
  let posts = JSON.parse(JSON.stringify(postlist))
  console.log(posts)
  
  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-l from-orange-600 to-orange-400 ">
      <div className="relative right-1/4 p-5">
      <h1 className="text-l font-roboto text-white">Posts</h1>
      <div className=" bg-postsDiv h-0.5 w-14 relative -left-2 ">

      </div>
      </div>
      <ul className="flex flex-col items-center gap-5">
    {posts.map((post: Post) => 

      {
        const keys = post.media_metadata ?   Object.keys(post.media_metadata): undefined;
        keys ? console.log(post.media_metadata[keys[0]].s.u) : console.log("no keys")

      return(
      
      <CardItem key={post.url} author={post.author} media_metadata={undefined} title={""} thumbnail={""} url={""} data={{
        title: post.title,
        author: post.author,
        thumbnail: '',
        url: post.url,
        media_metadata: keys ?  post.media_metadata[keys[0]].s.u : undefined
      }}  ></CardItem>
    )})}
    </ul>
    </main>
  );
}
