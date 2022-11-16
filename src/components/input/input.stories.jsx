import React from "react";
import { Input } from "./input";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    option: { control: "inline-radio", options: ["email", "password"] },
  },
};

const Template = (args) => <Input {...args} />;

export const Email = Template.bind({});
Email.args = {
  option: "email",
};

export const Password = Template.bind({});
Password.args = {
  option: "password",
};
