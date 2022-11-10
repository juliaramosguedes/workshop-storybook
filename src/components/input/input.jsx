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
  const [showPassword, setShowPassword] = useBoolean(false);

  const options = {
    email: {
      leftIcon: Mail,
      type: "email",
      placeholder: "ada@lovelace.com",
    },
    password: {
      leftIcon: Key,
      rightIcon: showPassword ? EyeOff : Eye,
      type: "password",
    },
  };

  return (
    <InputGroup>
      {options[option].leftIcon && (
        <InputLeftElement pointerEvents="none">
          <Icon as={options[option].leftIcon} color="teal.300" boxSize={5} />
        </InputLeftElement>
      )}
      <ChakraInput
        bg="white"
        type={options[option].type}
        placeholder={options[option].placeholder}
        ref={ref}
        {...inputProps}
      />
      {options[option].rightIcon && (
        <InputRightElement onClick={setShowPassword.toggle}>
          <Icon as={options[option].rightIcon} color="gray.300" boxSize={5} />
        </InputRightElement>
      )}
    </InputGroup>
  );
});
