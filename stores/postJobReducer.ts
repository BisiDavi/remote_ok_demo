import { POST_JOB } from "./constants";

export default function PostJobReducer(
  state = {
    jobDetails: null,
  },
  action
) {
  const { type, payload } = action;
  switch (type) {
    case POST_JOB: {
      return {
        ...state,
        jobDetails: payload,
      };
    }
    default:
      return state;
  }
}
