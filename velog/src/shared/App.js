import React from "react";
import styled from "styled-components";

// 라우터 불러오기
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router"
import { history } from '../redux/configureStore';


// 컴포넌트
import Header from "../components/Header";
import Main from "../pages/Main"
import Detail from "../pages/Detail"
import ManiBar from "../components/ManiBar";
import AddPost from "../pages/AddPost";
import EditPost from "../pages/EditPost";


function App() {
  return (
    <ConnectedRouter history={history}>
      <Wrap>
        <Header></Header>
        <ManiBar></ManiBar>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/recent" exact component={Main} />
          <Route path="/main/:board_id" exact component={Detail} />
          <Route path="/addpost" exact component={AddPost} />
          <Route path="/editpost/:board_id" exact component={EditPost} />
        </Switch>
      </Wrap>
    </ConnectedRouter>
  );
}

// Wrap component
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  min-height:100vh;
  background: #fcfcfc;
`

export default App;
