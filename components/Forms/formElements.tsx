import styles from "./formElements.module.css";

export default function FormElement({ content, ...props }) {
  switch (content.form) {
    case "input": {
      return <Input content={content} {...props} />;
    }
    case "checkbox": {
      return <Checkbox content={content} {...props} />;
    }
    case "radio": {
      return <Radio content={content} {...props} />;
    }
    case "markdown": {
      return <TextArea content={content} {...props} />;
    }
    case "select": {
      return <SelectInput content={content} {...props} />;
    }
    default:
      return null;
  }
}
function Input({ content, ...props }: FormFieldProps) {
  return (
    <div className={styles.inputGroup}>
      {content.label && <label htmlFor={content.name}>{content.label}</label>}
      <input
        name={content.name}
        value={props.values[content.name]}
        onBlur={props.handleBlur(content.name)}
        onChange={props.handleChange(content.name)}
        placeholder={content.placeholder}
      />
      {props.errors[content.name] && props.touched[content.name] && (
        <p className={styles.error}>{props.errors[content.name]}</p>
      )}
      {content.note && <p className={styles.note}>{content?.note}</p>}
    </div>
  );
}

function Checkbox({ content, ...props }: FormFieldProps) {
  return (
    <div className={styles.checkboxGroup}>
      {content.name && (
        <label htmlFor={content.name}>
          <input
            name={content.name}
            type="checkbox"
            onChange={props.handleChange(content.name)}
            checked={props.values[content.name]}
          />
          {content.label}
        </label>
      )}
    </div>
  );
}

function Radio({ content, ...props }: FormFieldProps) {
  return (
    <div className={styles.radio}>
      {content.name && (
        <label htmlFor={content.name}>
          <input
            name={content.name}
            type="radio"
            value={content.value}
            onChange={props.handleChange(content.name)}
          />
          {content.label}
        </label>
      )}
    </div>
  );
}

function SelectInput({ content, ...props }: FormFieldProps) {
  return (
    <div className={styles.select}>
      {content.label && <label htmlFor={content.name}>{content.label}</label>}
      <select
        value={props.values[content.name]}
        onChange={props.handleChange(content.name)}
      >
        {content.options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
      {props.errors[content.name] && props.touched[content.name] && (
        <p className={styles.error}>{props.errors[content.name]}</p>
      )}
    </div>
  );
}

function TextArea({ content, ...props }: FormFieldProps) {
  return (
    <>
      <div className="textarea">
        {content.label && <label htmlFor={content.name}>{content.label}</label>}
        <textarea
          onChange={props.handleChange(content.name)}
          value={props.values[content.name]}
        ></textarea>
        {props.errors[content.name] && props.touched[content.name] && (
          <p className={styles.error}>{props.errors[content.name]}</p>
        )}
      </div>
      <style jsx>
        {`
          .textarea {
            display: flex;
            align-items: center;
            margin: 15px 0px;
          }
          .textarea textarea {
            width: 300px;
            height: 100px;
          }

          .textarea label {
            margin: 0px 20px;
            margin-right: 20px;
            width: 150px;
            font-weight: bold;
            font-size: 16px;
          }
          @media (max-width: 1024px) {
            .textarea label {
              font-size: 14px;
            }
          }
        `}
      </style>
    </>
  );
}

interface FormFieldProps {
  content: {
    label?: string;
    name: string;
    type?: "email" | "password" | "checkbox";
    placeholder?: string;
    note?: string;
    value?: string;
    options?: string[];
  };
  values?: any;
  handleBlur?: any;
  handleChange?: any;
  touched?: any;
  errors?: any;
}
