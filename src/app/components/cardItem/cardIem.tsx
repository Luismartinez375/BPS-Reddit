'use client';
import { PostClass } from '@/app/api/getPosts';
import Image from 'next/image';
import bears from 'public/bears.webp';
import bookmark from 'public/bookmark.svg';
import bookmarkPressed from 'public/bookmarkPressed.svg';
import comments from 'public/comments.svg';
import etc from 'public/etc.svg';
import ruby from 'public/ruby_01.webp';
import share from 'public/share.svg';
import upVote from 'public/upvote.svg';
import pressedUpvode from 'public/upvotePressed.svg';
import { useState } from 'react';

export interface ICardItem {
  sampleTextProp: string;
}

export default function CardItem(prop: PostClass, link: string) {
  const [upvoted, setUpvoted] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(0);
  const [saved, setSaved] = useState(false);

  const save = () => {
    if (saved) {
      setSaved(false);
      localStorage.removeItem(prop.title);
    } else {
      setSaved(true);
      localStorage.setItem(prop.title, JSON.stringify(prop));
    }
  };

  const upvote = () => {
    if (upvoted) {
      setUpvoted(false);
      setUpvoteCount(upvoteCount - 1);
    } else {
      setUpvoted(true);
      setUpvoteCount(upvoteCount + 1);
    }
  };

  return (
    <div className=" bg-cardBg flex flex-col w-3/4 h-fit rounded shadow py-4 max-sm:w-11/12">
      <div className=" flex flex-row justify-between pt-4">
        <div className="flex flex-row gap-2 items-center relative left-6 bottom-4">
          {/* THUMBNAIL HERE */}
          <Image
            className=" inline-block h-8 w-8 rounded-full ring-1 ring-black"
            src={prop.thumbnail !== 'self' ? prop.thumbnail : ruby}
            width={25}
            height={25}
            onError={() => {
              ruby;
            }}
            alt={''}
          ></Image>
          {/* AUTHOR HERE!!!!! */}
          <p className=" text-black font-roboto text-xs">{prop.author}</p>
        </div>
        <button onClick={upvote} className="relative right-8">
          <Image
            src={upvoted ? pressedUpvode : upVote}
            width={30}
            height={30}
            alt="image here"
          ></Image>
          <p className=" text-xs">{upvoteCount}</p>
        </button>
      </div>
      {/* TITLE HERE */}
      <h1 className=" pl-14 pt-5 relative right-5 bottom-7">{prop.title}</h1>
      <Image
        className="self-center p-5 w-3/4 h-3/4"
        // IMAGE HERE
        width={800}
        height={800}
        src={prop.thumbnail !== 'self' ? prop.thumbnail : bears}
        alt=""
      ></Image>
      <div className=" flex flex-row px-8 gap-8 text-xs">
        <button className="flex flex-row items-center">
          <Image src={comments} alt={'comments'} width={28}></Image>
          {} comments
        </button>
        <button className="flex flex-row items-center gap-3">
          <Image
            src={share}
            alt={'share'}
            width={28}
            onClick={() => {
              navigator.clipboard.writeText(prop.url);
            }}
          ></Image>
          Share
        </button>
        <button className="flex flex-row items-center gap-3">
          <Image
            src={saved ? bookmarkPressed : bookmark}
            alt={'save'}
            width={28}
            onClick={save}
          ></Image>
          Save
        </button>
        <button className="relative left-72">
          <Image src={etc} alt="etc"></Image>
        </button>
      </div>
    </div>
  );
}
