import React,{useState} from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { useDispatch, useSelector} from "react-redux";
import { actionCreators as detailActions} from '../redux/modules/detail'
import { actionCreators as likeActions} from '../redux/modules/like'
import axios from "axios";

// 컴포넌트
import {Text,Grid,Button} from "../elements/ElementIndex";
import MarkdownRender from "../components/Makrdown";
import AddComments from "../components/AddComments";
import CommentList from "../components/CommentList";
import LikeBtn from "../components/LikeBtn";

const Detail = (props) => {
  const dispatch = useDispatch()
  const [detail, setDetail] = useState([]);
   
  // board_id 구하기
  const pathName = props.location.pathname
  const boardId = pathName.split('/')  

  const result = useSelector((state) => state.like.list)

  React.useEffect(() => {
    dispatch(detailActions.getDetailDB(boardId[2]))
    dispatch(likeActions.getLikeDB(boardId[2]))
    return () => {
      dispatch(detailActions.resetDetail())
    }
  },[result[1]])

  const list = useSelector((state) => state.detail.list)
  const like = useSelector((state) => state.like.list)


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
              <LikeBtn id={boardId[2]} states={like[1]} like={like[0]}></LikeBtn>
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
