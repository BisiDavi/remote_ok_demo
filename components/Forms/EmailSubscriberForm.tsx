import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { Button } from "@imports/.";
import { subscriberAction } from "../../stores/subscriberAction";
import styles from "./forms.module.css";
import subscriberSchema from "./subscriberSchema";
import { InputField, SelectField } from "./FormFields";
import React from "react";

export default function EmailSubscriberForm({ showEmail, cancelEmail }) {
  const dispatch = useDispatch();
  const periods: string[] = ["daily", "weekly"];

  return showEmail ? (
    <Formik
      initialValues={{ duration: "", email: "" }}
      validationSchema={subscriberSchema}
      onSubmit={(values) => {
        console.log(values);
        dispatch(subscriberAction(values));
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
          <form className={styles.EmailForm} onSubmit={handleSubmit}>
            <span className={styles.Newsletter}>
              <p>Get a </p>
              <SelectField
                name="duration"
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.duration && !errors.duration}
                options={periods}
              />
            </span>
            <p> email of all new Remote Jobs </p>
            <span className={styles.formSubscribe}>
              <InputField
                name="email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Type your email..."
                isValid={touched.email && !errors.email}
              />
              <Button text="Subscribe" type="submit" disabled={!isValid} />
            </span>
            <span onClick={cancelEmail} className={styles.cancelEmailForm}>
              X
            </span>
          </form>
        );
      }}
    </Formik>
  ) : null;
}
