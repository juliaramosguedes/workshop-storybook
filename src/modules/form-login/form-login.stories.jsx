import React from "react";
import { within, userEvent } from '@storybook/testing-library';

import { FormLogin } from "./form-login";
import { delay } from "../../utils";

export default {
  title: "Modules/FormLogin",
  component: FormLogin,
};

const Template = (args) => (
  <FormLogin {...args} />
);

export const Default = Template.bind({});
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const emailInput = canvas.getByLabelText('E-mail', {
    selector: 'input',
  });
  const passwordInput = canvas.getByLabelText('Senha', {
    selector: 'input',
  });

  await delay(1000);
  await userEvent.type(emailInput, 'hi@juliaramos.dev', {
    delay: 150,
  });

  await delay(1000);
  await userEvent.type(passwordInput, 'Summit2022', {
    delay: 150,
  });
  const submitButton = canvas.getByRole('button');

  await delay(1000);
  await userEvent.click(submitButton);
};
