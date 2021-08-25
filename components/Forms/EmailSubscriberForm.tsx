import { Formik } from "formik";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { RedButton } from "@imports/.";
import emailSubscriberAction from "@stores/subscriberAction";
import styles from "./forms.module.css";
import emailSubscriberSchema from "./subscriberSchema";

enum EmailPeriods {
  daily = "DAILY",
  weekly = "WEEKLY",
}

const EmailSubscriberForm = ({ showEmail, cancelEmail }): JSX.Element => {
  const dispatch = useDispatch();
  const periods: string[] = ["daily", "weekly"];

  return showEmail ? (
    <Formik
      initialValues={{ duration: "", email: "" }}
      validationSchema={emailSubscriberSchema}
      onSubmit={(values) => {
        console.log(values);
        dispatch(emailSubscriberAction(values));
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
          <Form className={styles.EmailForm}>
            <span className={styles.Newsletter}>
              <p>Get a </p>
              <Form.Control
                className={styles.formSelect}
                name="duration"
                onChange={handleChange}
                onBlur={handleBlur}
                isValid={touched.duration && !errors.duration}
                as="select"
              >
                {periods.map((period: EmailPeriods) => (
                  <option key={period} value={period}>
                    {period}
                  </option>
                ))}
              </Form.Control>
            </span>
            <p> email of all new Remote Jobs </p>
            <span className={styles.formSubscribe}>
              <Form.Control
                name="email"
                className={styles.formInput}
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Type your email..."
                isValid={touched.email && !errors.email}
              />
              <RedButton
                text="Subscribe"
                onClick={handleSubmit}
                type="submit"
              />
            </span>
            <span onClick={cancelEmail} className={styles.cancelEmailForm}>
              X
            </span>
          </Form>
        );
      }}{" "}
    </Formik>
  ) : null;
};

export default EmailSubscriberForm;
