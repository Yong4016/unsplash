import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { AppDispatch, RootState } from "../state/store";
import { useDispatch, useSelector } from "react-redux";
import { searchImages } from "../state/actions/";
import ImageList from "../components/ImageList";

const Search = () => {
  const dispatch: AppDispatch = useDispatch();
  const images = useSelector((state: RootState) => state.photo.images);

  const [keyword, setKeyword] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    // console.log(keyword)
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(searchImages(keyword));
  };

  useEffect(() => {
    dispatch(searchImages(keyword));
  }, [keyword]);

  return (
    <div>
      <SearchBar
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <ImageList images={images} />
    </div>
  );
};

export default Search;
