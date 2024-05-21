import React from "react";
import { Meta, Story } from "@storybook/react";
import Checkbox, { CheckboxProps } from "./Checkbox";

export default {
  title: "Example/Checkbox",
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args: any) => <Checkbox {...args} />;

export const Unchecked = Template.bind({});
Unchecked.args = {
  checked: false,
  onChange: (event: any) =>
    alert(`Checkbox is now ${event.target.checked ? "checked" : "unchecked"}`),
  disabled: false,
  label: "Unchecked Checkbox",
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  onChange: (event: any) =>
    alert(`Checkbox is now ${event.target.checked ? "checked" : "unchecked"}`),
  disabled: false,
  label: "Checked Checkbox",
};

export const DisabledUnchecked = Template.bind({});
DisabledUnchecked.args = {
  checked: false,
  onChange: (event: any) =>
    alert(`Checkbox is now ${event.target.checked ? "checked" : "unchecked"}`),
  disabled: true,
  label: "Disabled Unchecked Checkbox",
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  checked: true,
  onChange: (event: any) =>
    alert(`Checkbox is now ${event.target.checked ? "checked" : "unchecked"}`),
  disabled: true,
  label: "Disabled Checked Checkbox",
};
