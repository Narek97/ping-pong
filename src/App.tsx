import React, { useEffect } from "react";
import "./assets/styles/base.scss";
import { connectSocket, disconnectSocket } from "./socketConnect";

const App = () => {
  useEffect(() => {
    connectSocket();
    return () => {
      disconnectSocket();
    };
  }, []);

  return <div></div>;
};

export default App;
