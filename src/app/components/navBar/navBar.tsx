import Image from "next/image"
import reddit from 'public/reddit.webp'
export default function NavBar() {
  return (
    <nav className="flex flex-row w-full h-16 bg-nabar items-center ">
        <div className="p-4"><Image src={reddit} alt={"reddit"} width={30}></Image></div>
        <div className=" px-3 font-roboto text-white">reddit</div>
    </nav>
  )
}
