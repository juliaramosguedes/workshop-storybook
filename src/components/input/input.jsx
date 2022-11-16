import React from "react";
import {
  Icon,
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useBoolean,
  forwardRef,
} from "@chakra-ui/react";
import { Key, Eye, EyeOff, Mail } from "react-feather";

export const Input = forwardRef((props, ref) => {
  const { option, ...inputProps } = props;
  const [showPassword, setShowPassword] = useBoolean();
  const options = {
    email: {
      leftIcon: Mail,
      type: "email",
      placeholder: "ada@lovelace.com",
    },
    password: {
      leftIcon: Key,
      type: showPassword ? "text" : "password",
      rightIcon: showPassword ? EyeOff : Eye,
    },
  };

  return (
    <InputGroup>
      {options[option].leftIcon && (
        <InputLeftElement pointerEvents="none">
          <Icon as={options[option].leftIcon} boxSize={5} color="teal.300" />
        </InputLeftElement>
      )}
      <ChakraInput
        {...inputProps}
        ref={ref}
        type={options[option].type}
        placeholder={options[option].placeholder}
        bg="white"
      />
      {options[option].rightIcon && (
        <InputRightElement onClick={setShowPassword.toggle}>
          <Icon as={options[option].rightIcon} boxSize={5} color="teal.300" />
        </InputRightElement>
      )}
    </InputGroup>
  );
});
