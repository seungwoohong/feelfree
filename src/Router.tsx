import React, { lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const Dashboard = lazy(() => import("./pages/Dashboard"));

export default function Router() {
  return (
    <>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Redirect from="*" to="/dashboard" />
      </Switch>
    </>
  );
}
