import React from "react";
import { Box } from "@material-ui/core";
import Header from "../../Header";
import Main from "../../Main";

export type DashboardTemplateProps = {
  children: React.ReactElement;
};

export default function DashboardTemplate({
  children,
}: DashboardTemplateProps) {
  return (
    <Box>
      <Header />
      <Main>{children}</Main>
    </Box>
  );
}
