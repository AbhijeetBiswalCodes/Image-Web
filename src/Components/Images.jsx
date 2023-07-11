import React from 'react'
import ImageCards from './ImageCards' 
import { Stack , Box } from "@mui/material";

const Images = ({img}) => {
  return (
    <div className="xl:ml-28 md:ml-4 md:mr-5 mt-10 mb-10 md:m-[10px] grid grid-cols-1 md:grid-cols-3 gap-3"> 
     {img.map ((item , i) => ( 
      <div className='grid gap-3' >
        <ImageCards item={item} i={i} />  
        </div>
     ))}
    </div>
  )
}

export default Images