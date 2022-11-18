import React from "react";
import { FormFeedback } from "./form-feedback";

export default {
  title: "Components/FormFeedback",
  component: FormFeedback,
  argTypes: {
    status: { control: "inline-radio", options: ["success", "error"]}
  },
  parameters: {
    docs: {
      description: {
        component: "Componente utilizada para feedback de formulário"
      }
    }
  }
};

const Template = (args) => <FormFeedback {...args} />

export const Success = Template.bind({});
Success.args = {
  status: "success",
  message: "Oi, Programaria Summit 2022!"
};

export const Error = Template.bind({});
Error.args = {
  status: "error",
  message: "Oh no! Algo deu errado..."
}