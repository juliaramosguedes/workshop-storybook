import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Input, Button } from "../../components";

export const Form = () => {
  const schema = Yup.object({
    email: Yup.string()
      .email("Informe um e-mail válido")
      .required("Campo obrigatório"),
    password: Yup.string().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="email"
        placeholder="ada@lovelace.com"
        label="E-mail"
        error={errors.email?.message}
        {...register("email", { required: true })}
      />
      <Input
        type="password"
        label="Senha"
        error={errors.password?.message}
        {...register("password", { required: true })}
      />
      <Button type="submit">Clique aqui!</Button>
    </form>
  );
};
