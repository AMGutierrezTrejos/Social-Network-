import React from "react";
import Link from "next/link";
import Image from "next/image";
import { User } from "@prisma/client";

function UserMediaCard({ user }: { user: User }) {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href="/" className="text-green-500 text-xs">
          See All
        </Link>
      </div>
      {/* BOT */}
      <div className="flex gap-4 justify-between flex-wrap">
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.alphacoders.com/603/thumbbig-603479.webp"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default UserMediaCard;
