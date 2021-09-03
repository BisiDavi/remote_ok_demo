import { useState } from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { Button } from "@imports/.";
import { subscriberAction } from "@stores/subscriberAction";
import styles from "./forms.module.css";
import subscriberSchema from "./subscriberSchema";
import FormElement from "./formElements";
import Loading from "@components/Lazyload/loading";
import { toast } from "react-toastify";

export default function EmailSubscriberForm({ showEmail, cancelEmail }) {
  const dispatch = useDispatch();
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
      onSubmit={(values) => {
        setLoading(true);
        console.log(values);
        toast.success(
          `${values.email} thanks for subscribing to ${values.duration} email`
        );
        // dispatch(subscriberAction(values));
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
