import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RootStoreContext } from "./root-store-context.ts";
import RootStore from "./store/root.stores.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RootStoreContext.Provider value={new RootStore()}>
    <App />
  </RootStoreContext.Provider>
);
