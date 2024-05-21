import React from 'react';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "danger";
    size?: "small" | "medium" | "large";
}
declare const Button: React.FC<ButtonProps>;

export { Button };
