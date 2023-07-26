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

  return (
    <div>
      <ImageList images={images} />
    </div>
  );
};

export default Home;
