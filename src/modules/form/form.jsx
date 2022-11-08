import { Input, Button } from "../../components";

export const Form = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const [{ value: email }, { value: password }] = e.target;

    if (!email || !password) return;
  };

  return (
    <form onSubmit={onSubmit}>
      <Input type="email" name="email" placeholder="ada@lovelace.com" label="E-mail" autoComplete="true" />
      <Input type="password" name="password" label="Senha" />
      <Button type="submit">Clique aqui!</Button>
    </form>
  )
};