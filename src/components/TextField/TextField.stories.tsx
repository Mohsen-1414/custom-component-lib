import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import TextField from "./TextField";
import { TextFieldProps } from "./TextField";

export default {
  title: "Example/TextField",
  component: TextField,
} as Meta;

const Template: Story<TextFieldProps> = (args: any) => {
  const [value, setValue] = useState(args.value);

  return (
    <TextField
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  value: "",
  disabled: false,
  error: false,
  placeholder: "Enter text",
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: "",
  disabled: true,
  error: false,
  placeholder: "Enter text",
};

export const WithError = Template.bind({});
WithError.args = {
  value: "",
  disabled: false,
  error: true,
  placeholder: "Enter text",
};
