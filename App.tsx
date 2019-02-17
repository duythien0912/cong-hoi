import React from "react";
import { AppContainer } from "./components/Route";

interface Props {}

export const App: React.SFC<Props> = React.memo(() => {
  return <AppContainer />;
});
