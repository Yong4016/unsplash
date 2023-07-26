import { ActionType } from "../action-types";
import { UnsplashState } from "../types";

const initialState: UnsplashState = {
  images: [],
  loading: false,
  error: null,
};

const reducer = (state: UnsplashState = initialState, action: any) => {
  switch (action.type) {
    case ActionType.FETCH_IMAGES:
      return { ...state, loading: true, error: null };
    case ActionType.FETCH_IMAGES_SUCCESS:
      return { ...state, loading: false, images: action.payload };
    case ActionType.FETCH_IMAGES_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
