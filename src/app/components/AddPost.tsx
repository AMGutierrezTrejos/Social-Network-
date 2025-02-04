import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";

const AddPost = async () => {
  const { userId } = await auth();
  
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* PROFILE PIC */}
      <Image
        src="https://images3.alphacoders.com/135/1356879.png"
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* POST */}
      <div className="flex-1">
        {/* INPUT */}
        <form action="" className="flex gap-4">
          <textarea
            placeholder="What strategy are you planning today?"
            className="flex-1 bg-slate-100 p-2 rounded-lg"
            name="desc"
          />
          <Image
            src="/emoji.png"
            alt=""
            width={30}
            height={30}
            className="w-7 h-7 cursor pointer self-end"
          />
          <button className="">Send</button>
        </form>
        {/* POST OPTIONS */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex items-center gap-2 cursor-pointer">
            {/* OPTION 1 */}
            <Image src="/addimage.png" alt="" width={20} height={20} />
            Photo
          </div>
          {/* OPTION 2 */}
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="" width={20} height={20} />
            Video
          </div>
          {/* OPTION 3 */}
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/events.png" alt="" width={20} height={20} />
            Event
          </div>
          {/* OPTION 4 */}
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="" width={20} height={20} />
            Survey
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
