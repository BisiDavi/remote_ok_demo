import { useState } from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { FormTypewriterEffect, RedButton } from "@imports/.";
import { JobAction } from "@stores/jobAction";
import styles from "./forms.module.css";

enum EmailPeriods {
  daily = "DAILY",
  weekly = "WEEKLY",
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
          @media (max-width: 1024px) {
            .SearchformPlaceholder {
              font-size: 20px;
            }
          }
        `}
      </style>
    </div>
  );
};

export function WorldwideJobForm() {
  const dispatch = useDispatch();

  function displayWorldWideJobs() {
    dispatch(JobAction());
  }

  return (
    <Form>
      <Form.Check
        onClick={displayWorldWideJobs}
        type="checkbox"
        className="font-weight-bold"
        label="Only show worldwide jobs"
      />
    </Form>
  );
}

export const EmailForm = ({ showEmail, cancelEmail }): JSX.Element => {
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
