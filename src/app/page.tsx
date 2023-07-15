import CardItem from "./components/cardItem/cardIem";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gradient-to-l from-orange-600 to-orange-400 ">
      <div className="relative right-1/4 p-5">
      <h1 className="text-l font-roboto text-white">Posts</h1>
      <div className=" bg-postsDiv h-0.5 w-14 relative -left-2 ">

      </div>
      </div>
      <CardItem/>
    </main>
  );
}
