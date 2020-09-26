import React from "react";
import "./App.css";
import Main from "./components/Main";
import { ConfigStore } from './redux/configStore';
import { Provider } from "react-redux";

const store = ConfigStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main></Main>
      </div>
    </Provider>
  );
}

export default App;
