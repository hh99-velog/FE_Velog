import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";

import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Input from "../elements/Input"

const Detail = (props) => {


  return (

    
      <Grid  margin="0 auto">
      <MaxWidth >
        <Text margin="0px 0px 32px 0px" bold size="55px">
          안녕하세요 저는 윤석준입니다!!.
        </Text>
        <Grid is_flex>
          <Grid is_flex>
            <Grid flex="flex">
              <Text bold>{`${props.nickname} ·`}</Text>
              <Text margin="0px 0px 0px 5px">{props.createdAt}</Text>
            </Grid>

            <Button
              width="100px"
              height="35px"
              flex
              borderRadius="50px"
              border="1px solid rgb(173, 181, 189)"
              bg="white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path
                  fill="rgb(173, 181, 189)"
                  d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"
                ></path>
              </svg>
              <Text color="rgb(173, 181, 189)">{props.like}</Text>
            </Button>
          </Grid>
        </Grid>
        <Grid   margin = "0px auto" padding ="50px 0px 0px 0px">
            <Image margin ="10px"borderRadius= "0px"/>
            </Grid>
            </MaxWidth>
            <Grid  margin = "0 auto"width = "800px" padding ="50px 0px 0px 0px">
            <Input  multiLine>{props.content}</Input>
            </Grid>

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
    @media only screen and (max-width: 800px) {
    width: 100%;
  }
  width:800px;
  margin: 0 auto;
`


export default Detail;
