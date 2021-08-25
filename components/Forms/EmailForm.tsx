import { Form, FormControl, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { FormTypewriterEffect, RedButton } from "@imports/.";
import { JobAction } from "@stores/jobAction";
import styles from "./forms.module.css";

enum EmailPeriods {
  daily = "DAILY",
  weekly = "WEEKLY",
}


const EmailForm = ({ showEmail, cancelEmail }): JSX.Element => {
  
  const periods: string[] = ["daily", "weekly"];

  return showEmail ? (
    <Form className={styles.EmailForm}>
      <span className={styles.Newsletter}>
        <p>Get a </p>
        <Form.Control className={styles.formSelect} as="select">
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
          className={styles.formInput}
          type="email"
          placeholder="Type your email..."
        />
        <RedButton text="Subscribe" type="submit" />
      </span>
      <span onClick={cancelEmail} className={styles.cancelEmailForm}>
        X
      </span>
    </Form>
  ) : null;
};

export default EmailForm;