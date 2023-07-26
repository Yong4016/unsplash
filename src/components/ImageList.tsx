import React from "react";
import { UnsplashImage } from "../state/types";
import { Link } from "react-router-dom";

interface ImageListProps {
  images: UnsplashImage[];
}

const ImageList: React.FC<ImageListProps> = ({ images }) => {
  return (
    <div>
      <div className="ImageList">
        {images &&
          images.map((image) => {
            return (
              <div key={image.id}>
                <Link to={`/${image.id}`} className="image-link">
                  <img
                    src={image.urls.small}
                    alt="something went wrong"
                  />
                  
                  <div>
                    <p>
                      <b>Photo By:</b> {image.user.first_name} {image.user.last_name}
                    </p>
                    <p>
                      <b>Likes:</b> {image.likes}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ImageList;
