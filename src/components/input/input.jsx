export const Input = (props) => {
  const { label, type, placeholder, name, ...rest } = props;
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <input type={type} placeholder={placeholder} name={name} {...rest} />
    </>
  )
};