import { EMAIL_SUBSCRIBER } from "./constants";

const emailSubscriberAction = (payload) => (dispatch) => {
  dispatch({
    type: EMAIL_SUBSCRIBER,
    payload,
  });
};

export default emailSubscriberAction;
