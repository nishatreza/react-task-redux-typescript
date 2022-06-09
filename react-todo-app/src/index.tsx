import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App/App";
import reducers from "./reducers";


const store = createStore(reducers, composeWithDevTools(applyMiddleware()));


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
 	<Provider store={store}>
			<App />
		</Provider>
  </React.StrictMode>
);

