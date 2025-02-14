import React from "react";
import styles from "./style.module.css";

interface FloatingLabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  type = "text",
  value = "",
  label,
  onChange = () => {},
  placeholder = "",
  className = "",
  name,
  ...rest
}) => {
  return (
    <div className={`${styles.floatingLabelGroup} ${className}`}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className={styles.floatingInput}
        name={name}
        {...rest}
      />
      <label className={`${styles.floatingLabel} ${value ? styles.filled : ""}`}>
        {label}
      </label>

      {type === "email" && value && isValidEmail(value) && (
        <svg
          className={styles.emailCheck}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6.93931 11.6569L6.93934 11.6568L6.93936 11.6569L11.8891 6.70711C12.2796 6.31658 12.2796 5.68342 11.8891 5.29289C11.4986 4.90237 10.8654 4.90237 10.4749 5.29289L6.93933 8.82846L5.5251 7.41423C5.13458 7.0237 4.50141 7.0237 4.11089 7.41422C3.72036 7.80475 3.72036 8.43791 4.11089 8.82844L6.93931 11.6569Z"
            fill="#27CFB1"
          />
        </svg>
      )}
    </div>
  );
};
