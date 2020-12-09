import { Form, FormControl, InputGroup } from "react-bootstrap";
import { FormTypewriterEffect } from "../../imports";
import styles from "./forms.module.css";

export const SearchForm = () => {
  return (
    <>
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
        <div className="SearchformPlaceholder">
          <FormTypewriterEffect />
        </div>
      </Form>
      <style jsx>
        {`
          .SearchformPlaceholder {
            position: absolute;
            left: 40px;
            top: 20px;
          }
        `}
      </style>
    </>
  );
};

export const WorldwideJobForm = () => {
  return (
    <Form>
      <Form.Check type="checkbox" label="Only show worldwide jobs" />
    </Form>
  );
};
