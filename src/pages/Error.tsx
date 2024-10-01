import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const isRouteError = isRouteErrorResponse(error);

  return (
    <Box padding={5}>
      <Heading>Oops</Heading>{" "}
      <Text>
        {isRouteError
          ? "This page does not exist"
          : "An unexpected error occurred"}
      </Text>
    </Box>
  );
};

export default Error;
