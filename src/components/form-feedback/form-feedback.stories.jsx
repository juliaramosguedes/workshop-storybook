import React from "react";
import { FormFeedback } from "./form-feedback";

export default {
  title: "Components/FormFeedback",
  component: FormFeedback,
  argTypes: {
    status: { control: "inline-radio", options: ["success", "error"] },
  },
};

const Template = (args) => <FormFeedback {...args} />;

export const Success = Template.bind({});
Success.args = { status: "success", message: "Tudo certo!" };

export const Error = Template.bind({});
Error.args = { status: "error", message: "Ooops! Algo deu errado." };
