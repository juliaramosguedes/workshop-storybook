export const Button = (props) => {
  const { onClick, type = 'button', ...rest } = props;

  return (
    <button onClick={onClick} type={type} {...rest} />
  )
};