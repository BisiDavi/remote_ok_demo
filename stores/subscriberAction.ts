import { EMAIL_SUBSCRIBER } from "./constants";

const subscriberAction = (payload) => (dispatch) => {
  dispatch({
    type: EMAIL_SUBSCRIBER,
    payload,
  });
};

export default subscriberAction;
