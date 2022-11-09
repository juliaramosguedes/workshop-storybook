import React from "react";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";

import { FormFeedback } from "../form-feedback";

export const FormField = (props) => {
  const { children, error, isInvalid, name, isRequired, label, ...boxProps } =
    props;

  return (
    <FormControl isInvalid={isInvalid} isRequired={isRequired} {...boxProps}>
      {label && (
        <FormLabel htmlFor={name} mb={1.5} color="gray.600">
          {label}
        </FormLabel>
      )}
      {children}
      <FormErrorMessage mt={3}>
        <FormFeedback message={error} status="error" />
      </FormErrorMessage>
    </FormControl>
  );
};
