import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App/App";
import reducers from "./reducers";
import "bootstrap/dist/css/bootstrap.min.css";
import createSagaMiddleware from "redux-saga";


const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));


// sagaMiddleware.run();

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

