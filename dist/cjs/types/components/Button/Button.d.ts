import React from "react";
import "./button.css";
export interface ButtonProps {
    label: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "danger";
    size?: "small" | "medium" | "large";
}
declare const Button: React.FC<ButtonProps>;
export default Button;
