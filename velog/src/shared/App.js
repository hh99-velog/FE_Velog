import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

function App() {
  return (
    <Wrap>
      <Header></Header>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  min-height:100vh;
  background: #f8f9fa;
`

export default App;
