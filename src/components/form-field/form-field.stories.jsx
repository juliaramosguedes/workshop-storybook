import React from "react";

import { FormField } from "./form-field";
import { Input, Email } from "../input";

export default {
  title: "Components/FormField",
  component: FormField,
  args: {
    name: "email",
    error: "Informe um e-mail válido",
    label: "E-mail",
    inputArgs: Email.args,
  }
};

const Template = ({ inputArgs, ...args }) => (
  <FormField {...args}>
    <Input {...inputArgs} />
  </FormField>
);

export const Default = Template.bind({});

export const Labelless = Template.bind({});
Labelless.args = {
  label: undefined,
};

export const RequiredInput = Template.bind({});
RequiredInput.args = {
  isRequired: true,
};

export const InvalidInput = Template.bind({});
InvalidInput.args = {
  isInvalid: true,
};
