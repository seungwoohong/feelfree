import React from "react";
import { Container } from "@material-ui/core";

export type MainProps = {
  children: React.ReactElement;
};

export default function Main({ children }: MainProps) {
  return <Container>{children}</Container>;
}
