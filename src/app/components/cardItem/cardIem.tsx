'use client'
import Image from "next/image";
import bookmark from "public/bookmark.svg";
import comments from "public/comments.svg";
import etc from "public/etc.svg";
import share from "public/share.svg";
import upVote from "public/upvote.svg";
import pressedUpvode from 'public/upvotePressed.svg';
import { useState } from "react";


export default function CardItem() {
  const [upvoted, setUpvoted] = useState(false)
  const [upvoteCount, setUpvoteCount] = useState(0)
  const upvote = () => {
    if (upvoted) {
      setUpvoted(false)
      setUpvoteCount(upvoteCount - 1)
    } else {
      setUpvoted(true)
      setUpvoteCount(upvoteCount + 1)
    }
  }

  return (<div className=" bg-cardBg flex flex-col w-3/5 h-fit rounded shadow">
    <div className=" flex flex-row justify-around pt-4">
      <Image src={""} alt={"profile pic"}></Image>
      <p className=" text-black font-roboto">Author: Luis Martinez</p>
      <button onClick={upvote} className="">
        <Image src={upvoted ? pressedUpvode : upVote} width={30} height={30} alt="image here"></Image>
        <p className=" text-xs">{upvoteCount}</p>
      </button>
      </div>
      <h1 className=" pl-14 pt-5">Title here</h1>
      <Image className="self-center p-5" src={''} alt="image here"></Image>
      <div className=" flex flex-row px-8 gap-8 text-xs">
        <button className="flex flex-row items-center">
          <Image src={comments} alt={"comments"} width={28}></Image>
          {} comments
        </button>
        <button className="flex flex-row items-center gap-3">
          <Image src={share} alt={"share"} width={28}></Image>
          Share
        </button>
        <button className="flex flex-row items-center gap-3">
          <Image src={bookmark} alt={"save"} width={28}></Image>
          Save
        </button>
        <button className="relative left-1/2">
          <Image src={etc} alt="etc"></Image>
        </button>
      </div>
  </div>
  )
}
