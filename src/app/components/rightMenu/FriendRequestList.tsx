"use client";

import { FollowRequest, User } from "@prisma/client";
import Image from "next/image";
import React from "react";

type RequesWithUser = FollowRequest & {
  sender: User;
};

const FriendRequestList = ({ request }: { request: RequesWithUser[] }) => {
  return (
    <div className="">
      {request.map((request) => (
        <div className="flex items-center justify-between" key={request.id}>
          <div className="flex items-center gap-4">
            <Image
              src="https://images7.alphacoders.com/592/thumbbig-592678.webp"
              alt=""
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-semibold">John Doe</span>
          </div>
          <div className="flex gap-3 justify-end">
            <Image
              src="/accept.png"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="/reject.png"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendRequestList;
