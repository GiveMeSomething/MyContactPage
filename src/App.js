import React from "react";
import "./App.css";
import Main from "./components/Main";
import { ConfigStore } from './redux/configStore';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';

const store = ConfigStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Main></Main>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
