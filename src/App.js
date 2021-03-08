import React from "react";
import {
  RsWrapper,
  WholeWrapper,
  Wrapper,
} from "./components/commonComponents";
import styled from "styled-components";

const App = () => {
  return (
    <WholeWrapper>
      <RsWrapper>
        <Wrapper>Hello world</Wrapper>
      </RsWrapper>
    </WholeWrapper>
  );
};

export default App;
