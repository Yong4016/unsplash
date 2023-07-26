import { Dispatch } from "redux";
import { UnsplashImage } from "../types/index";
import { ActionType } from "../action-types";
import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;

export const getImages = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.FETCH_IMAGES,
    });

    try {
      let { data } = await api.get<UnsplashImage[]>(`photos/random?client_id=${API_KEY}&count=30`);

      let images = data.map((image) => {
        return {
          id: image.id,
          urls: {
            small: image.urls.small,
          },
          user: {
            first_name: image.user.first_name,
            last_name: image.user.last_name,
          },
          likes: image.likes,
        };
      });

      dispatch({
        type: ActionType.FETCH_IMAGES_SUCCESS,
        payload: images,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.FETCH_IMAGES_ERROR,
        payload: error.message,
      });
    }
  };
};
