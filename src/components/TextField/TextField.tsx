import React from "react";
import "./textField.css";

export interface TextFieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: boolean;
  placeholder?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  value,
  onChange,
  disabled = false,
  error = false,
  placeholder = "",
}) => {
  return (
    <div className={`textfield-container ${error ? "error" : ""}`}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        className="textfield-input"
      />
      {error && (
        <span className="textfield-error-message">Error: Invalid input</span>
      )}
    </div>
  );
};

export default TextField;
