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
  const [page, setPage] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    // console.log(keyword)
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPage(1);
    dispatch(searchImages(keyword, page));
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevPage = () => {
    setPage((prevPage) => {
      if (prevPage <= 1) {
        return 1;
      } else {
        return prevPage - 1;
      }
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    dispatch(searchImages(keyword, page));
  }, [dispatch, page]);

  return (
    <div>
      <SearchBar
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      {images.length ? (
        <>
          <ImageList images={images} />
          <div className="button-container">
            <button
              className="pagination-button"
              type="button"
              onClick={handlePrevPage}>
              Previous
            </button>
            <button
              className="pagination-button"
              type="button"
              onClick={handleNextPage}>
              Next
            </button>
          </div>
        </>
      ) : (
        <h3 style={{ textAlign: "center", marginTop: "30px" }}>No Search Results</h3>
      )}
    </div>
  );
};

export default Search;
