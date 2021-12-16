import React,{useState} from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import detail, { actionCreators as detailActions} from '../redux/modules/detail'
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
    console.log(boardId[2])
  

    React.useEffect(() => {
      getDetail()
      },[])


 // 서버에서 상세페이지 데이터 가져오기     
  const getDetail = () =>{
  axios({
    method: "get",
    url: "https://run.mocky.io/v3/c86acbab-be47-4d90-a253-8bd1007ad733",
}).then((res) => {
    const data = res.data.result
    console.log(data)
    const list = data.filter(s => s.board_id === boardId[2]) 
     const detail = list[0]
     console.log(detail)
     setDetail(detail)

}).catch((err) => {
    console.log(err)
})
  }

  const postDelete = () => {
    dispatch(detailActions.postDelete(boardId[2]))
  }

   
  return (
      <DetailStyle margin="0 auto" padding='40px 0'>
          <Text margin="0px 0px 32px 0px" bold size="45px">
            {detail.title}
          </Text>
          <Grid is_flex>
            <Grid is_flex>
              <Text width='auto' bold>by {`${detail.nickname}`}</Text>
              <Text width='auto' margin='0 auto 0 10px' size='14px'>{detail.createdAt}</Text>
            </Grid>
            <Grid width='auto' is_flex>
              <Button bg='transparent' size='14px' width='50px' border='none' hoverColor='#000'>수정</Button>
              <Button bg='transparent' size='14px' width='50px' border='none' hoverColor='#000' margin='0 10px 0 0'>삭제</Button>
              <LikeBtn states={true} like='2'></LikeBtn>
            </Grid>
          </Grid>
          <Grid margin='40px 0'>
            {detail.img?<img width='100%' alt='본문이미지' src={detail.img} borderRadius= "0px"/>:null}
            <MarkdownRender>{detail.content}</MarkdownRender>

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
