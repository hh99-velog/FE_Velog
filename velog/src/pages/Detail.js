import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { useSelector} from "react-redux";
import { useParams } from "react-router-dom";


import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Input from "../elements/Input"
import MarkdownRender from "../components/Makrdown";
import AddComments from "../components/AddComments";

const Detail = (props) => {
    let { board_id } = useParams(); // board_id라는 변수는 :board_id 자리에 있던 숫자를 의미
    const post_list = useSelector((store) => store.main.list );

    const pathName = props.location.pathname
    const boardId = pathName.split('/')
    console.log(boardId)

    const list = post_list.find((data)=>{return data.board_id === boardId[2]}) // 데이터의 board_id와 :board_id 자리에 있던 숫자가 같을 때만 리턴

    

  return (
      <Grid  margin="0 auto" padding='40px 0'>
        <MaxWidth >
          <Text margin="0px 0px 32px 0px" bold size="55px">
            {list.title}
          </Text>
          <Grid is_flex>
            <Grid is_flex>
              <Grid flex="flex">
                <Text bold>by {`${list.nickname}`}</Text>
                <Text size='14px' margin="5px 0px 0px 10px">{list.createdAt}</Text>
              </Grid>
              <Button
                width="100px"
                height="35px"
                flex
                borderRadius="50px"
                border="1px solid rgb(173, 181, 189)"
                bg="white">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path
                    fill="rgb(173, 181, 189)"
                    d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"
                  ></path>
                </svg>
                <Text color="rgb(173, 181, 189)">{list.like}</Text>
              </Button>
            </Grid>
          </Grid>
          <Grid margin = "0px auto" padding ="50px 0px 0px 0px">
              {list.img?<img width='100%' alt='본문이미지' src={list.img} borderRadius= "0px"/>:null}
          </Grid>
          <Grid  margin = "0 auto"width = "100%" padding ="20px 0px 0px 0px">
            <MarkdownRender>{list.content}</MarkdownRender>
            <Grid is_flex justifyContent = "flex-end" >
              <Grid is_flex  width = "200px" height ="30px" margin ="20px 0px" >
                  <Button margin = "0px 15px"bg = "white" 
                  borderRadius ="30px" 
                  border ="1px solid black" 
                  width = "100%" 
                  height ="100%">
                  <Text>수정</Text>
                  </Button>
                  <Button  bg = "white"
                  borderRadius = "30px" 
                  border ="1px solid black" 
                  width = "100%" 
                  height ="100%">
                  <Text>삭제</Text>
                  </Button>
              </Grid>
            </Grid>
          </Grid>
          <AddComments></AddComments>
        </MaxWidth>
      </Grid>
    
  );
};

Detail.defaultProps = {
  title: "안녕",
  content:
    "너무 너무 어려워 ㅇ    ㅁㄴㄹㄴㅇㄹㅇㄴㄹㅇㄴㄹㅇㄴㄹㄹ      ㅏㅓㅏ  ㅓㅏㅓㅣ    ㄴㅇㅁㄹㄴㅇㄹㄴㅇㄴㅇㄹㅇㄹㄴㅇㄹㅓㅏ    ㅣ      ㅟㅏ",
  createdAt: "2021년 12월 13일",
  nickname: "윤석준",
  like: "20",
};
const MaxWidth = styled.div`
  width:800px;
  margin: 0 auto;
`


export default Detail;
