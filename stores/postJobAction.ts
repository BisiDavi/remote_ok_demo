import { POST_JOB } from "./constants";

export const PostJobAction = (payload) => (dispatch) => {
  dispatch({
    type: POST_JOB,
    payload,
  });
};
