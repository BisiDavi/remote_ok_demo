import styles from "./formType.module.css";

export default function displayFormElement(content) {
  switch (content.form) {
    case "input": {
      return <Input content={content} />;
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

function Input({ content }) {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={content.name}>{content.label}</label>
      <input
        name={content.name}
        onBlur={content.blur}
        onChange={content.handleChange}
        placeholder={content.placeholder}
      />
    </div>
  );
}

function Checkbox({ content }) {
  return (
    <div className="checkbox">
      <label htmlFor={content.name}>{content.label}</label>
      <input type="checkbox" name={content.name} />
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
