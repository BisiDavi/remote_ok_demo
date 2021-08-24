import styles from "./formElements.module.css";

export default function FormElement({ content, ...props }) {
  switch (content.form) {
    case "input": {
      return <Input content={content} {...props} />;
    }
    case "checkbox": {
      return <Checkbox content={content} />;
    }
    case "markdown": {
      return <p>markdown</p>;
    }
    case "textarea": {
      return <Textarea content={content} />;
    }
    default:
      return null;
  }
}
function Input({ content, ...props }) {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={content.name}>{content.label}</label>
      <input
        name={content.name}
        value={props.values[content.name]}
        onBlur={props.handleBlur(content.name)}
        onChange={props.handleChange(content.name)}
        placeholder={content.placeholder}
      />
      {props.errors[content.name] && props.touched[content.name] && (
        <p>{props.errors[content.name]}</p>
      )}
    </div>
  );
}

function Checkbox({ content }) {
  return (
    <div className={styles.checkboxGroup}>
      <input type="checkbox" name={content.name} />
      <label htmlFor={content.name}>{content.label}</label>
    </div>
  );
}

function Textarea({ content }) {
  return (
    <div className="textarea">
      <label htmlFor={content.name}>{content.label}</label>
      <textarea name={content.name}>{content.placeholder}</textarea>
    </div>
  );
}
