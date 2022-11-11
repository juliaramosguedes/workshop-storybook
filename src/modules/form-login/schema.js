import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = Yup.object({
  email: Yup.string()
    .email("Informe um e-mail válido")
    .required("Campo obrigatório"),
  password: Yup.string().required("Campo obrigatório"),
});

export const schemaResolver = yupResolver(schema);