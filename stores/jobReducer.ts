import {
  FETCH_WORLDWIDE_JOBS_FAILED,
  FETCH_WORLDWIDE_JOBS_REQUEST,
  FETCH_WORLDWIDE_JOBS_SUCCESSFUL,
} from "./constants";

export default function JobReducer(
  state = {
    worldwide: false,
    loading: false,
  },
  action
) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_WORLDWIDE_JOBS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_WORLDWIDE_JOBS_SUCCESSFUL: {
      return {
        ...state,
        loading: false,
        worldwide: !state.worldwide,
      };
    }
    case FETCH_WORLDWIDE_JOBS_FAILED: {
      return {
        ...state,
        loading: false,
        worldwide: false,
        error: payload,
      };
    }
    default:
      return state;
  }
}
