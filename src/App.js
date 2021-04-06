import React from "react";
import {
 RsWrapper,
 WholeWrapper,
 Wrapper,
} from "./components/commonComponents";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "../src/routers/layout/Header";
import Content from "./routers/layout/Content";

const App = () => {
 return (
  <Router>
   {/** HEADER */}
   <Route path="/" component={Header} />
   {/** CONTENT */}
   <Route path="/" component={Content} />
  </Router>
 );
};

export default App;
