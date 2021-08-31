import {
  FETCH_WORLDWIDE_JOBS_FAILED,
  FETCH_WORLDWIDE_JOBS_REQUEST,
  FETCH_WORLDWIDE_JOBS_SUCCESSFUL,
} from "./constants";

export const JobAction = () => (dispatch) => {
  try {
    dispatch({
      type: FETCH_WORLDWIDE_JOBS_REQUEST,
    });
    dispatch({
      type: FETCH_WORLDWIDE_JOBS_SUCCESSFUL,
    });
  } catch (error) {
    dispatch({
      type: FETCH_WORLDWIDE_JOBS_FAILED,
      payload: error,
    });
  }
};
