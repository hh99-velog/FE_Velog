import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { useSelector} from "react-redux";
import { useParams } from "react-router-dom";

// 컴포넌트
import {Text,Grid,Button} from "../elements/ElementIndex";
import MarkdownRender from "../components/Makrdown";
import AddComments from "../components/AddComments";
import CommentList from "../components/CommentList";
import LikeBtn from "../components/LikeBtn";

const Detail = (props) => {
    let { board_id } = useParams(); // board_id라는 변수는 :board_id 자리에 있던 숫자를 의미
    const post_list = useSelector((store) => store.main.list );

    const pathName = props.location.pathname
    const boardId = pathName.split('/')
    console.log(boardId)

    const list = post_list.find((data)=>{return data.board_id === boardId[2]}) // 데이터의 board_id와 :board_id 자리에 있던 숫자가 같을 때만 리턴

  return (
      <DetailStyle margin="0 auto" padding='40px 0'>
          <Text margin="0px 0px 32px 0px" bold size="45px">
            {list.title}
          </Text>
          <Grid is_flex>
            <Grid is_flex>
              <Text width='auto' bold>by {`${list.nickname}`}</Text>
              <Text width='auto' margin='0 auto 0 10px' size='14px'>{list.createdAt}</Text>
            </Grid>
            <Grid width='auto' is_flex>
              <Button bg='transparent' size='14px' width='50px' border='none' hoverColor='#000'>수정</Button>
              <Button bg='transparent' size='14px' width='50px' border='none' hoverColor='#000' margin='0 10px 0 0'>삭제</Button>
              <LikeBtn states={true} like='2'></LikeBtn>
            </Grid>
          </Grid>
          <Grid margin='40px 0'>
            {list.img?<img width='100%' alt='본문이미지' src={list.img} borderRadius= "0px"/>:null}
            <MarkdownRender>{list.content}</MarkdownRender>
          </Grid>
          <AddComments></AddComments>
          <CommentList></CommentList>
      </DetailStyle>
    
  );
};

Detail.defaultProps = {
  title: "안녕",
  content: "콘텐츠",
  createdAt: "2021년 12월 13일",
  nickname: "윤석준",
  like: "20",
};

const DetailStyle = styled.div`
  box-sizing:border-box;
  max-width:800px;
  width: 100%;
  margin: 0 auto;
  padding: 0 0 100px 0;

  @media only screen and (max-width: 768px) {
    padding: 0 20px 80px 20px;
  }
`


export default Detail;
