import React from "react";
import { WholeWrapper } from "../../components/commonComponents";
import { Route } from "react-router-dom";
import MM00 from "../MM/MM00";
import MM01 from "../MM/MM01";
import MM02 from "../MM/MM02";
import MM03 from "../MM/MM03";

const Content = () => {
 return (
  <WholeWrapper>
   <Route exact path={"/"} component={MM00}></Route>
   <Route exact path={"/MM01"} component={MM01}></Route>
   <Route exact path={"/MM02"} component={MM02}></Route>
   <Route exact path={"/MM03"} component={MM03}></Route>
  </WholeWrapper>
 );
};

export default Content;
