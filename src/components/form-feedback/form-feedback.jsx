import React from "react";
import { Alert, AlertDescription, Icon } from "@chakra-ui/react";
import { AlertCircle, Smile } from "react-feather";

const statusMap = {
  error: {
    icon: AlertCircle,
    bg: "red.100",
    color: "red.700",
  },
  success: {
    icon: Smile,
    bg: "green.100",
    color: "green.700",
  },
};

export const FormFeedback = (props) => {
  const { message, status, ...boxProps } = props;

  return (
    <Alert
      bg={statusMap[status].bg}
      borderRadius={8}
      p={2}
      status={status}
      {...boxProps}
    >
      <AlertDescription
        color={statusMap[status].color}
        display="flex"
        textStyle="md"
      >
        <Icon as={statusMap[status].icon} boxSize={6} mr={2} />
        {message}
      </AlertDescription>
    </Alert>
  );
};
