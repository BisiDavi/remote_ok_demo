import { Form,FormControl, InputGroup } from "react-bootstrap";

export const SearchForm = () => {
  return (
    <Form className="search-form">
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1 bg-white">
            <i className="fa fa-search"></i>
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          className="bg-white"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </Form>
  );
}

export const WorldwideJobForm = () =>{
  return (
    <Form>
      <Form.Check type="checkbox" label="Only show worldwide jobs" />
    </Form>
  )
}