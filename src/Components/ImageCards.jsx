import React from "react";
import { Avatar } from "@mui/material"; 
import CheckCircleIcon from '@mui/icons-material/CheckCircle';  

const ImageCards = ({ item, i }) => {
  const {
    user: {
      for_hire,
      name,
      profile_image: { small },
    },
    urls: { small_s3 },
  } = item;

  return (
    <div className="flex items-center justify-center h-full mr-4 ml-4 xl:mr-10">
      <div key={i} className="relative group">
        <img
          className=" h-auto max-w-full object-contain backdrop-blur-lg "
          src={small_s3}
        />
        <div className="absolute inset-0 flex opacity-0 group-hover:opacity-100 bg-black bg-opacity-20 transition-opacity">
          <div className={`flex mt-auto ml-3 ${for_hire ? "mb-0 " : "mb-4"}`}>
            <Avatar src={small} /> 
            <div>
            <h1 className="text-white text-start font-semibold xl:text-[19px] ml-2">
              {name}
            </h1> 
            <div className="flex">
            <h1 className="font-medium ml-2 text-white text-[10px] xl:text-[11px]">
              {for_hire ? "Available for hire" : "Not available for hire"}
            </h1>  
            <div>
              {for_hire ? <CheckCircleIcon fontSize="7px" className="text-white mb-4 ml-1"/> : ""}
            </div>
            </div> 
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default ImageCards;
