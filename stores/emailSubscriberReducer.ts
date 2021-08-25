import { EMAIL_SUBSCRIBER } from "./constants";

export function emailSubscriberReducer(state = { method: "" }, action) {
  const { type, payload } = action;
  switch (type) {
    case EMAIL_SUBSCRIBER: {
      return {
        ...state,
        method: payload,
      };
    }
    default:
      return state;
  }
}
