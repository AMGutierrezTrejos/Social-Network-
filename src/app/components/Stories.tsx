import Image from "next/image";
import React from "react";

const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        {/* STORY */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://static.wikia.nocookie.net/characterprofile/images/3/36/132Ditto.png/revision/latest?cb=20160809205529"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Mauro</span>
        </div>
        {/* STORY */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://static.wikia.nocookie.net/characterprofile/images/3/36/132Ditto.png/revision/latest?cb=20160809205529"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Mauro</span>
        </div>
        {/* STORY */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://static.wikia.nocookie.net/characterprofile/images/3/36/132Ditto.png/revision/latest?cb=20160809205529"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Mauro</span>
        </div>
        {/* STORY */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://static.wikia.nocookie.net/characterprofile/images/3/36/132Ditto.png/revision/latest?cb=20160809205529"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Mauro</span>
        </div>
        {/* STORY */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://static.wikia.nocookie.net/characterprofile/images/3/36/132Ditto.png/revision/latest?cb=20160809205529"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Mauro</span>
        </div>
        {/* STORY */}
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Image
            src="https://static.wikia.nocookie.net/characterprofile/images/3/36/132Ditto.png/revision/latest?cb=20160809205529"
            alt=""
            width={80}
            height={80}
            className="w-20 h-20 rounded-full ring-2"
          />
          <span className="font-medium">Mauro</span>
        </div>
      </div>
    </div>
  );
};

export default Stories;
