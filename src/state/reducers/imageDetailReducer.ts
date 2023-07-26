import { ActionType } from "../action-types";
import { UnsplashImage } from "../types";

type ImageDetailState = {
  image: UnsplashImage | null;
  error: string | null;
};

const initialState: ImageDetailState = {
  image: null,
  error: null,
};

const imageDetailReducer = (state: ImageDetailState = initialState, action: any) => {
  switch (action.type) {
    case ActionType.FETCH_IMAGE_DETAILS:
      return { ...state, error: null };
    case ActionType.FETCH_IMAGE_DETAILS_SUCCESS:
      return { ...state, image: action.payload };
    case ActionType.FETCH_IMAGE_DETAILS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default imageDetailReducer;