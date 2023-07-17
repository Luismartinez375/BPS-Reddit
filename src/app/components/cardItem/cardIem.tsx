'use client'
import Image from "next/image";
import bookmark from "public/bookmark.svg";
import bookmarkPressed from "public/bookmarkPressed.svg";
import comments from "public/comments.svg";
import etc from "public/etc.svg";
import share from "public/share.svg";
import upVote from "public/upvote.svg";
import pressedUpvode from 'public/upvotePressed.svg';
import { useState } from "react";
import { Post } from "../../../../types";

export interface ICardItem {
  sampleTextProp: string;
}

export default function CardItem(post: Post) {
  const [upvoted, setUpvoted] = useState(false)
  const [upvoteCount, setUpvoteCount] = useState(0)
  const [saved, setSaved] = useState(false)

  const save = () => {
    if (saved) {
      setSaved(false)
      localStorage.removeItem(post.data.title)
    } else {
      setSaved(true)
      localStorage.setItem(post.data.title, JSON.stringify(post.data))
    }
  }

  const upvote = () => {
    if (upvoted) {
      setUpvoted(false)
      setUpvoteCount(upvoteCount - 1)
    } else {
      setUpvoted(true)
      setUpvoteCount(upvoteCount + 1)
    }
  }

  return (<div className=" bg-cardBg flex flex-col w-3/5 h-fit rounded shadow ">
    <div className=" flex flex-row justify-between pt-4">
      <div className="flex flex-row gap-2 items-center relative left-6 bottom-4">
      <Image src={post.data.thumbnail} alt={"profile pic"}></Image>
      <p className=" text-black font-roboto text-xs">{post.data.author}</p>
      </div>
      <button onClick={upvote} className="relative right-8">
        <Image src={upvoted ? pressedUpvode : upVote} width={30} height={30} alt="image here"></Image>
        <p className=" text-xs">{upvoteCount}</p>
      </button>
      </div>
      <h1 className=" pl-14 pt-5 relative right-5 bottom-7">{post.data.title}</h1>
      <Image className="self-center p-5" src={post.data.media_metadata} width={100} height={100} alt="image here"></Image>
      <div className=" flex flex-row px-8 gap-8 text-xs">
        <button className="flex flex-row items-center">
          <Image src={comments} alt={"comments"} width={28}></Image>
          {} comments
        </button>
        <button className="flex flex-row items-center gap-3">
          <Image src={share} alt={"share"} width={28} onClick={() => {navigator.clipboard.writeText(post.data.url)}}></Image>
          Share
        </button>
        <button className="flex flex-row items-center gap-3">
          <Image src={saved ? bookmarkPressed : bookmark} alt={"save"} width={28} onClick={save}></Image>
          Save
        </button>
        <button className="relative left-72">
          <Image src={etc} alt="etc"></Image>
        </button>
      </div>
  </div>
  )
}
