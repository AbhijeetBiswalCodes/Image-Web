import React from "react";
import { Avatar } from "@mui/material";

const ImageCards = ({ item, i }) => {
  return (
    <div className="flex items-center justify-center h-full mr-4 ml-4 xl:mr-10">
      <div key={i} className="relative group">
        <img
          className=" h-auto max-w-full object-contain backdrop-blur-lg "
          src={item?.urls.small_s3}
        />
        <div className="absolute inset-0  flex items-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-20 transition-opacity">
          <div className="mt-auto flex xl:ml-4 ml-2 mb-2">
            <Avatar src={item.user.profile_image.small} />
            <h1 className="text-white text-center font-semibold xl:text-[19px] mt-1 ml-2">
              {item?.user.name}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCards;
