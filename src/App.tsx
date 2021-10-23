import React, { useState, useContext } from "react";
import {
  Link,
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import { Provider } from "react-redux";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "redux-devtools-extension";
import Page1 from "./views/Page1";
import Page2 from "./views/Page2";
import LoginPage from "./views/LoginPage";
import "./App.css";
import { rootReducer } from "./store/reducers";
import { rootSaga } from "./store/sagas";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

const ProtectedRoute = (props: any) => {
  const { isLogged } = useContext(Context);
  console.log("isLogged", isLogged);
  if (!isLogged) return <Redirect to="/" />;
  return <Route path={props.path}>{props.children}</Route>;
};

export const links = { page1: "/page1", page2: "/page2", loginPage: "/login" };

export const Context = React.createContext({ isLogged: false });

const firstUpper = (text: string) => text[1].toUpperCase() + text.slice(2);
function App() {
  const [isLogged, setIsLogged] = useState(false);
  const logIn = () => {
    setIsLogged(true);
  };
  const logout = () => {
    setIsLogged(false);
  };
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Context.Provider value={{ isLogged }}>
            <header className="App-header">
              {Object.values(links).map((link) => (
                <Link to={link} key={link}>
                  {firstUpper(link)}
                </Link>
              ))}
              <div className="logout" onClick={logout}>
                Logout
              </div>
            </header>
            <div className="layout">
              <Switch>
                <ProtectedRoute path={links.page1}>
                  <Page1 />
                </ProtectedRoute>
                <ProtectedRoute path={links.page2}>
                  <Page2 />
                </ProtectedRoute>
                <Route path={links.loginPage}>
                  <LoginPage logIn={logIn} />
                </Route>
                <Redirect exact to={links.loginPage} />
              </Switch>
            </div>
          </Context.Provider>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
