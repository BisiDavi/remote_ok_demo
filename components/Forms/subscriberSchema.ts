import * as yup from "yup";

const subscriberSchema = yup.object().shape({
  duration: yup.string().required("duration required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email Address is required"),
});

export default subscriberSchema;
