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
      return <p>markdown</p>;
    }
    case "textarea": {
      return <Textarea content={content} />;
    }
    case "image": {
      return <FileImage content={content} />;
    }
    case "select": {
      return <SelectInput content={content} />;
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
      <p className={styles.note}>{content?.note}</p>
    </div>
  );
}

function Checkbox({ content, ...props }) {
  return (
    <div className={styles.checkboxGroup}>
      <label htmlFor={content.name}>
        <input
          name={content.name}
          type="checkbox"
          onChange={props.handleChange(content.name)}
          checked={props.values[content.name]}
        />
        {content.label}
      </label>
    </div>
  );
}

function Radio({ content, ...props }) {
  return (
    <div className={styles.radio}>
      <label htmlFor={content.name}>
        <input
          name={content.name}
          type="radio"
          value={content.value}
          onChange={props.handleChange(content.name)}
        />
        {content.label}
      </label>
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

function FileImage({ content }) {
  return (
    <div className="imageField">
      <h4>{content.title}</h4>
      <label htmlFor={content.name}>
        💾 Upload
        <input name={content.name} type="file" />
      </label>
    </div>
  );
}

function SelectInput({ content }) {
  return (
    <div className="select">
      <label htmlFor={content.name}>{content.label}</label>
      <select>
        {content.options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
