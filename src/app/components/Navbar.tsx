"use client";
import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";

import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { GrHomeRounded } from "react-icons/gr";
import { IoPeopleOutline } from "react-icons/io5";
import { TbMessageChatbot } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";

import {
  MdOutlineNotificationsActive,
  MdOutlineAutoStories,
} from "react-icons/md";
import { CiLogin } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT SIDE */}
      <div className="md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-green-600">
          Social Network MGT
        </Link>
      </div>
      {/* CENTER SIDE */}
      <div className="hidden md:flex w-[50%] text-sm items-center justify-between ">
        {/* LINKS */}
        <div className="flex gap-6 text-grenn-600">
          <Link href="/" className="flex items-center gap-2">
            <GrHomeRounded size={18} />
            <span>HomePage</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <IoPeopleOutline size={18} />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <MdOutlineAutoStories size={18} />
            <span>Stories</span>
          </Link>
        </div>
        {/* SEARCH */}
        <div className="hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none"
          />
          <CiSearch size={24} />
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="w-[30%] flex items-center justify-end gap-4 xl:gap-8">
        <ClerkLoading>
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-green-500 motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <IoPeopleOutline size={24} />
            </div>
            <div className="cursor-pointer">
              <TbMessageChatbot size={24} />
            </div>
            <div className="cursor-pointer">
              <MdOutlineNotificationsActive size={24} />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 text-sm">
              <CiLogin size={24} />
              <Link href="/sign-in">Login / Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
