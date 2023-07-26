import { Dispatch } from "redux";
import { UnsplashImage } from "../types/index";
import { ActionType } from "../action-types";
import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;

export const getImageDetails = (id: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.FETCH_IMAGE_DETAILS,
    });

    try {
      let { data } = await api.get<UnsplashImage>(`photos/${id}?client_id=${API_KEY}`);

      let imageDetail = {
        id: data.id,
        urls: {
          small: data.urls.small,
          full: data.urls.full,
        },
        user: {
          first_name: data.user.first_name,
          last_name: data.user.last_name,
        },
        likes: data.likes,
      };

      dispatch({
        type: ActionType.FETCH_IMAGE_DETAILS_SUCCESS,
        payload: imageDetail,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.FETCH_IMAGE_DETAILS_ERROR,
        payload: error.message,
      });
    }
  };
};
