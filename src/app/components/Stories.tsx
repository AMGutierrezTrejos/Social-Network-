import Image from "next/image";
import React from "react";

const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8">
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://i.redd.it/ebeh50lpw3i91.png"
            alt=""
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="font-medium">Mauro</span>
        </div>
      </div>
    </div>
  );
};

export default Stories;
