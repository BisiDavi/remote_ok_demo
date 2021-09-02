import * as yup from "yup";

const hireFormSchema = yup.object().shape({
  company: yup.string().required("company name is required"),
  position: yup.string().required("job position is required"),
  primaryTag: yup.string().required("primary tag for job is required"),
  tags: yup.string().required("job tag is required"),
  location: yup.string().required("location is required"),
  annualSalary: yup.string().required("annual salary required"),
  description: yup.string().required("job description is required"),
  copanyEmail: yup
    .string()
    .email("Please enter a valid email address")
    .required("Company email address is required"),
});

export default hireFormSchema;
