import React from "react";

import Link from "next/link";
import Image from "next/image";
import ProfileCard from "./ProfileCard";
import Ad from "../Ad";

const LeftMenu = ({ type }: { type: "home" | "profile" }) => {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard />}
      <div className="p-4 bg-white shadow-md rounded-lg text-sm text-gray-500 flex flex-col gap-2">
        {/* FIRST OPTION */}
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100"
        >
          <Image src="/posts.png" alt="" width={24} height={24} />
          <span className="">My Posts</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"></hr>
        {/* SECOND OPTION */}
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100"
        >
          <Image src="/activity.png" alt="" width={24} height={24} />
          <span className="">My Activity</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"></hr>
        {/* THIRD OPTION */}
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100"
        >
          <Image src="/market.png" alt="" width={24} height={24} />
          <span className="">My Market</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"></hr>
        {/* FOURTH OPTION */}
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100"
        >
          <Image src="/events.png" alt="" width={24} height={24} />
          <span className="">My Events</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"></hr>
        {/* FIFTH OPTION */}
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100"
        >
          <Image src="/albums.png" alt="" width={24} height={24} />
          <span className="">My Albums</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"></hr>
        {/* SIXTH OPTION */}
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100"
        >
          <Image src="/videos.png" alt="" width={24} height={24} />
          <span className="">My Videos</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"></hr>
        {/* SEVENTH OPTION */}
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100"
        >
          <Image src="/news.png" alt="" width={24} height={24} />
          <span className="">My News</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"></hr>
        {/* EIGHTH OPTION */}
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100"
        >
          <Image src="/courses.png" alt="" width={24} height={24} />
          <span className="">My Courses</span>
        </Link>
        {/* NINTH OPTION */}
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100"
        >
          <Image src="/lists.png" alt="" width={24} height={24} />
          <span className="">My Lists</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"></hr>
        {/* TENTH OPTION */}
        <Link
          href="/"
          className="flex items-center gap-4 p-2 hover:bg-slate-100"
        >
          <Image src="/settings.png" alt="" width={24} height={24} />
          <span className="">Settings</span>
        </Link>
        <hr className="border-t-1 border-gray-50 w-36 self-center"></hr>
      </div>
      {/* ADS */}
      <Ad size="sm" />
    </div>
  );
};

export default LeftMenu;
