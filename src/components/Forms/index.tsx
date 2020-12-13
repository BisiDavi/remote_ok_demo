import { Form, FormControl, InputGroup } from "react-bootstrap";
import { FormTypewriterEffect, RedButton } from "../../imports";
import styles from "./forms.module.css";

enum EmailPeriods {
  daily = "DAILY",
  weekly = "WEEKLY"
}

export const SearchForm = () => {
  return (
    <div className="search">
      <Form className={`${styles.Searchform} search-form`}>
        <InputGroup className="mb-3">
          <InputGroup.Prepend className={styles.SearchIcon}>
            <InputGroup.Text id="basic-addon1 bg-white">
              <i className="fa fa-search fa-2x"></i>
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            className="bg-white"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <div
          className={`${styles.SearchformPlaceholder}  SearchformPlaceholder`}
        >
          <FormTypewriterEffect />
        </div>
      </Form>
      <style jsx>
        {`
          .search input:focus ~ .SearchformPlaceholder {
            display: none;
          }
          .search input:focus {
            outline: none !important;
            border: 0px;
          }
          .SearchformPlaceholder {
            position: absolute;
            left: 60px;
            top: 10px;
            font-size: 30px;
            font-weight: 600;
            font-family: "sans-serif", Arial;
          }
        `}
      </style>
    </div>
  );
};

export const WorldwideJobForm = () => {
  return (
    <Form>
      <Form.Check type="checkbox" label="Only show worldwide jobs" />
    </Form>
  );
};

export const EmailForm = () => {
  const periods: string[] = ["daily", "weekly"];
  return (
    <Form className={styles.EmailForm}>
      <p>Join 83,752+ people and get a </p>
      <Form.Control as="select">
        {periods.map(period => (
          <option key={period} value={period}>
            {period}
          </option>
  ))}
      </Form.Control>
      <p> email of all new remote jobs </p>
      <Form.Control type="email" placeholder="Email" />
      <RedButton text="Subscribe" type="submit" />
    </Form>
  );
};
