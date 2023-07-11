import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/FetchFromAPI";
import Header from "./Header";
import Images from "./Images";

const Feed = () => {
  const [img, setImg] = useState([]);
  const [searchTerm, setSearchTerm] = useState();

  useEffect(() => {
    fetchFromAPI(`search/photos?page=1&per_page=25&query=${searchTerm}`).then((data) =>
      setImg(data.results) 
    );
  }, [searchTerm]);

  console.log(img);

  return (
    <div>
      <Header setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <Images img={img} />
    </div>
  );
};

export default Feed;
