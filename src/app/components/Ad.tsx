import Image from "next/image";
import React from "react";

function Ad({ size }: { size: "sm" | "md" | "lg" }) {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg text-sm">
      {/* TOP */}
      <div className="flex items-center justify-between font-medium text-gray-500">
        <span>Sponsored Ads</span>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      {/* BOT */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="https://images7.alphacoders.com/134/thumbbig-1348996.webp"
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-1">
          <Image
            src="https://images7.alphacoders.com/134/thumbbig-1348996.webp"
            alt=""
            width={24}
            height={24}
            className="rounded-full w-6 h-6 object-cover"
          />
          <span className="text-green-500 font-medium">Poke Fan</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? "Lorem ipsum dolor sit amet"
            : size === "md"
            ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."}
        </p>
        <button className="bg-gray-100 text-gray-500 p-2 text-sm rounded-lg">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Ad;
