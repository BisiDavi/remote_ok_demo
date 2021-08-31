import { EMAIL_SUBSCRIBER } from "./constants";

export const subscriberAction = (payload) => (dispatch) => {
  dispatch({
    type: EMAIL_SUBSCRIBER,
    payload,
  });
};

