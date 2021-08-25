import { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { RedButton } from "@imports/.";
import emailSubscriberAction from "@stores/emailSubscriberAction";
import styles from "./forms.module.css";

enum EmailPeriods {
  daily = "DAILY",
  weekly = "WEEKLY",
}

const EmailForm = ({ showEmail, cancelEmail }): JSX.Element => {
  const [emailForm, setEmailForm] = useState({
    duration: "",
    email: "",
  });

  const dispatch = useDispatch();
  const periods: string[] = ["daily", "weekly"];

  function inputHandler(e) {
    setEmailForm({ ...emailForm, [e.target.name]: e.target.value });
  }

  console.log("emailForm", emailForm);

  function subscriberHandler() {
    dispatch(emailSubscriberAction(emailForm));
  }

  return showEmail ? (
    <Form className={styles.EmailForm}>
      <span className={styles.Newsletter}>
        <p>Get a </p>
        <Form.Control
          className={styles.formSelect}
          name="duration"
          onChange={inputHandler}
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
          onChange={inputHandler}
          name="email"
          className={styles.formInput}
          type="email"
          placeholder="Type your email..."
        />
        <RedButton text="Subscribe" onClick={subscriberHandler} type="submit" />
      </span>
      <span onClick={cancelEmail} className={styles.cancelEmailForm}>
        X
      </span>
    </Form>
  ) : null;
};

export default EmailForm;
