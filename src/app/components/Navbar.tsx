"use client";
import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";

import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { GrHomeRounded } from "react-icons/gr";
import { IoPeopleOutline } from "react-icons/io5";
import { TbMessageChatbot } from "react-icons/tb";
import { MdOutlineNotificationsActive, MdOutlineAutoStories  } from "react-icons/md";
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
      <div className="hidden md:flex w-[50%] text-sm">
        {/* LINKS */}
        <div className="flex gap-6 text-grenn-600">
          <Link href="/" className="flex items-center gap-2">
            <GrHomeRounded width={16} height={16} className="w-4 h-4" />
            <span>HomePage</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <IoPeopleOutline width={16} height={16} className="w-4 h-4" />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <MdOutlineAutoStories  width={16} height={16} className="w-4 h-4" />
            <span>Stories</span>
          </Link>
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
              <IoPeopleOutline width={16} height={16} />
            </div>
            <div className="cursor-pointer">
              <TbMessageChatbot width={16} height={16} />
            </div>
            <div className="cursor-pointer">
              <MdOutlineNotificationsActive width={16} height={16} />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 text-sm">
              <CiLogin width={20} height={20} />
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
