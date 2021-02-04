import React, { Suspense } from "react";
import Router from "./Router";
import Loader from "./components/Loader";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router />
    </Suspense>
  );
}

export default App;
