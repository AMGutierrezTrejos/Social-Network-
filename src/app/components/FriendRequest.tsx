import React from "react";
import Link from "next/link";
import Image from "next/image";

function FriendRequest() {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link href="/" className="text-green-500 text-xs">
          See All
        </Link>
      </div>
      {/* BOT */}
      <div className="flex items-center justify-center">
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
          <Image src="/accept.png" alt="" width={20} height={20} />
          <Image src="/reject.png" alt="" width={20} height={20} />
        </div>
      </div>
    </div>
  );
}

export default FriendRequest;
