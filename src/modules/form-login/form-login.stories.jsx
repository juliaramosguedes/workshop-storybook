import React from "react";
import { within, userEvent } from "@storybook/testing-library";
import { rest } from "msw";

import { delay } from "utils";
import { FormLogin } from "./form-login";

export default {
  title: "Modules/FormLogin",
  component: FormLogin,
};

const Template = (args) => <FormLogin {...args} />;

export const SubmitSuccess = Template.bind({});
SubmitSuccess.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const emailInput = canvas.getByLabelText("E-mail", {
    selector: "input",
  });
  const passwordInput = canvas.getByLabelText("Senha", {
    selector: "input",
  });

  await delay(1000);
  await userEvent.type(emailInput, "hi@juliaramos.dev", {
    delay: 150,
  });

  await delay(1000);
  await userEvent.type(passwordInput, "Summit2022", {
    delay: 150,
  });
  const submitButton = canvas.getByRole("button");

  await delay(1000);
  await userEvent.click(submitButton);
};
SubmitSuccess.parameters = {
  msw: {
    handlers: [
      rest.post("https://programaria.com.br/api/login", (req, res, ctx) =>
        res(ctx.status(200))
      ),
    ],
  },
};

export const SubmitError = Template.bind({});
SubmitError.play = SubmitSuccess.play;
SubmitError.parameters = {
  msw: {
    handlers: [
      rest.post("https://programaria.com.br/api/login", (req, res, ctx) =>
        res(ctx.status(500))
      ),
    ],
  },
};
