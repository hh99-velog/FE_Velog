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
import NotFound from "../pages/Notfound";
import AddPost from "../pages/AddPost";


function App() {
  return (
    <ConnectedRouter history={history}>
      <Wrap>
        <Header></Header>
        <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/main/:post_id" exact component={Detail} />
          <ManiBar path="/" exact component={ManiBar}></ManiBar>
          <ManiBar path="/recent" exact component={ManiBar}></ManiBar>
          <AddPost path="/addpost" exact component={AddPost}></AddPost>
        </Switch>
      </Wrap>
    </ConnectedRouter>
  );
}

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  min-height:100vh;
  background: #f8f9fa;
`

export default App;
