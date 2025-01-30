import React from "react";
import Link from "next/link";
import Image from "next/image";

function UserInfoCard({ userId }: { userId: string }) {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-green-500 text-xs">
          See All
        </Link>
      </div>
       {/* BOT */}
       <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">Ash Ketchum</span>
          <span className="text-sm">@ashketchum</span>
        </div>
        <p>Lorem ipsum dolor sit amet</p>
        {/* First Map */}
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16} />
          <span className="">
            Living in <b>Pallet Town</b>
          </span>
        </div>
        {/* Second School */}
        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="" width={16} height={16} />
          <span className="">
            Went to <b>Pewter School</b>
          </span>
        </div>
        {/* Third Work */}
        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="" width={16} height={16} />
          <span className="">
            Works at <b>Pewter City</b>
          </span>
        </div>
        {/* Social Media */}
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="" width={16} height={16} />
            <Link href="google.com" className="text-green-500 font-medium">
              google
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="" width={16} height={16} />
            <span className="text-sm">Joined January 2023</span>
          </div>
        </div>
        <button className="bg-green-400 text-white text-sm rounded-md p-2">Follow</button>
        <span className="text-red-400 self-end text-xs cursor-pointer">Block User</span>
      </div>
    </div>
  );
}

export default UserInfoCard;
