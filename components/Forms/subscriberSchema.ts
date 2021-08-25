import * as yup from "yup";

const emailSubscriberSchema = yup.object().shape({
  duration: yup.string().required("duration required"),
  email: yup.string().email("Please enter a valid email address"),
});

export default emailSubscriberSchema;
