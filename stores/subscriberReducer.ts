import { EMAIL_SUBSCRIBER } from "./constants";

export default function SubscriberReducer(
  state = { method: "", email: "" },
  action
) {
  const { type, payload } = action;
  switch (type) {
    case EMAIL_SUBSCRIBER: {
      return {
        ...state,
        method: payload.duration,
        email: payload.email,
      };
    }
    default:
      return state;
  }
}
