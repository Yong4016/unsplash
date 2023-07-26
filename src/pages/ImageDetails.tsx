import React, { useEffect } from "react";
import { AppDispatch, RootState } from "../state/store";
import { useDispatch, useSelector } from "react-redux";
import { getImageDetails } from "../state/actions";
import { useParams, useNavigate } from "react-router-dom";

const ImageDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const image = useSelector((state: RootState) => state.detail.image);

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(getImageDetails(`${id}`));
  }, [dispatch, id]);

  if (!image) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details-container">
      {!image ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="img-card">
            <button
              onClick={goBack}
              className="back-btn">
              Back
            </button>
            <img
              src={image.urls.full}
              alt="something went wrong"
              className="img-full"
            />
          </div>
          <div className="details">
            <p>
              <b>Photo By:</b> {image.user.first_name} {image.user.last_name}
            </p>
            <p>
              <b>Likes:</b> {image.likes}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ImageDetails;
