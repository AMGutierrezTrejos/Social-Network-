import Image from "next/image";
import React from "react";

const AddPost = () => {
  return (
    <div className="p-4 bg-white rounded-lg flex gap-4 justify-between text-sm">
      {/* PROFILE PIC */}
      <Image
        src="https://images3.alphacoders.com/135/1356879.png"
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />
      {/* POST */}
      <div className="">
        {/* INPUT */}
        <div className="">
          <textarea name="" id="" />
          <Image
            src="/emoji.png"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 cursor pointer self-end"
          />
        </div>
        {/* POST OPTIONS */}
        <div className=""></div>
      </div>
    </div>
  );
};

export default AddPost;
