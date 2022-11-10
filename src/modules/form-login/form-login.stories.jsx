import React from "react";

import { FormLogin } from "./form-login";

export default {
  title: "Modules/FormLogin",
  component: FormLogin,
};

const Template = (args) => (
  <FormLogin {...args} />
);

export const Default = Template.bind({});
