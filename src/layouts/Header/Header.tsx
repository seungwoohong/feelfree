import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";
import Logo from "./Logo";

export default function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Logo />
      </Toolbar>
    </AppBar>
  );
}
