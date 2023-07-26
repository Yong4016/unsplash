import React, { useEffect } from "react";
import { AppDispatch, RootState } from "../state/store";
import { useDispatch, useSelector } from "react-redux";
import { getImages } from "../state/actions/";
import ImageList from "../components/ImageList";

const Home = () => {
  const dispatch: AppDispatch = useDispatch();
  const images = useSelector((state: RootState) => state.photo.images);

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  const regenerateImages = () => {
    dispatch(getImages());
  };

  return (
    <div>
      <ImageList images={images} />
      <div className="button-container">
        <button
          onClick={regenerateImages}
          className="pagination-button">
          Regenerate Random Images
        </button>
      </div>
    </div>
  );
};

export default Home;
