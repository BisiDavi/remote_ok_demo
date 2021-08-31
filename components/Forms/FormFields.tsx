import styles from "./forms.module.css";

export function InputField(props: InputFieldProps) {
  return (
    <div className="inputGroup">
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      <input
        name={props.name}
        className={styles.formInput}
        type={props?.type}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder={props.placeholder}
      />
      {props?.isValid && <p>{props?.isValid}</p>}
    </div>
  );
}

export function SelectField(props: SelectFieldProps) {
  return (
    <div className="selectGroup">
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      <select
        className={`${styles.formSelect} ${props.className}`}
        name={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
      >
        {props?.options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      {props?.isValid && <p>{props?.isValid}</p>}
    </div>
  );
}

interface InputFieldProps {
  label?: string;
  name: string;
  type?: "email" | "password";
  onChange: (e) => void;
  onBlur: (e) => void;
  placeholder?: string;
  isValid?: boolean;
  className?: string;
}

interface SelectFieldProps extends InputFieldProps {
  options: string[];
}
