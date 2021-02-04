import React from "react";
import { CircularProgress, Container, Box } from "@material-ui/core";

export default function Loader() {
  return (
    <Container>
      <Box
        width={1}
        height={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress size={100} />
      </Box>
    </Container>
  );
}
