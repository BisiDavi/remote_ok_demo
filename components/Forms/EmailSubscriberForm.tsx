import { useState } from "react";
import { Formik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { Button } from "@imports/.";
import styles from "./forms.module.css";
import subscriberSchema from "./subscriberSchema";
import FormElement from "./formElements";
import Loading from "@components/Lazyload/loading";
import "react-toastify/dist/ReactToastify.css";

export default function EmailSubscriberForm({ showEmail, cancelEmail }) {
  const [loading, setLoading] = useState(false);

  const formContent = {
    duration: {
      form: "select",
      name: "duration",
      options: ["daily", "weekly"],
    },
    email: {
      form: "input",
      name: "email",
      type: "input",
      placeholder: "Type your email...",
    },
  };

  return showEmail ? (
    <Formik
      initialValues={{ duration: "", email: "" }}
      validationSchema={subscriberSchema}
      onSubmit={async (values) => {
        setLoading(true);
        console.log(values);
        await axios
          .post("/api/email-subscriber", values)
          .then((response) => {
            console.log("response", response);
            setLoading(false);
            toast.success(
              `${values.email} thanks for subscribing to ${values.duration} email`
            );
          })
          .catch((error) => {
            console.log("error", error);
            setLoading(false);
            toast.error(`Oops, unable to subscribe`);
          });
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
      }) => {
        return (
          <>
            {loading && <Loading />}
            <ToastContainer
              position="top-left"
              closeOnClick
              draggable
              pauseOnHover
            />
            <form className={styles.EmailForm} onSubmit={handleSubmit}>
              <span className={styles.Newsletter}>
                <p>Get a </p>
                <span>
                  <FormElement
                    content={formContent.duration}
                    values={values}
                    errors={errors}
                    handleChange={handleChange}
                    touched={touched}
                  />
                </span>
              </span>
              <p> email of all new Remote Jobs </p>
              <span className={styles.formSubscribe}>
                <span>
                  <FormElement
                    content={formContent.email}
                    values={values}
                    errors={errors}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    touched={touched}
                  />
                </span>
                <Button text="Subscribe" type="submit" disabled={!isValid} />
              </span>
              <span onClick={cancelEmail} className={styles.cancelEmailForm}>
                X
              </span>
            </form>
          </>
        );
      }}
    </Formik>
  ) : null;
}
