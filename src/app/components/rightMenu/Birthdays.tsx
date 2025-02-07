import React from "react";
import Image from "next/image";
import Link from "next/link";

function Birthdays() {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">Birthdays</span>
      </div>
      {/* BOT */}
      <div className="flex items-center justify-between">
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
          <button className="text-white bg-green-500 text-xs px-2 py-1 rounded-md">
            Celebrate
          </button>
        </div>
      </div>
      {/* UPCOMING */}
      <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
        <Image src="/gift.png" alt="" width={24} height={24} />
        <Link href="/" className="flex flex-col gap-1 text-xs">
          <span className="text-gray-700 font-semibold">Upcoming Birthdays</span>
          <span className="text-gray-500">see other poke buddies who are also celebrating birthdays</span>
        </Link>
      </div>
    </div>
  );
}

export default Birthdays;
