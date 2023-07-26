import React from "react";
import { UnsplashImage } from "../state/types";


interface ImageListProps {
  images: UnsplashImage[];
}

const ImageList: React.FC<ImageListProps> = ({ images }) => {
  return (
    <div className="ImageList">
      {images &&
        images.map((image) => {
          return (
            <div key={image.id}>
              <img
                src={image.urls.small}
                alt="something went wrong"
              />
              <div>
                <p>
                  <b>Photo By:</b> {image.user.first_name} {image.user.last_name}
                </p>
                <p><b>Likes:</b> {image.likes}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ImageList;
