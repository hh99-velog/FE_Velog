import React from 'react'
import styled from "styled-components"
import { history } from '../redux/configureStore'

import Grid  from '../elements/Grid'
import Text from '../elements/Text'
import Button from '../elements/Button'

const Detail = (props) => {
    return (
        <>
        <Grid width = "768px" margin = "0 auto">
            <Text margin = "0px 0px 32px 0px" bold size = "55px">안녕하세요 저는 윤석준입니다!!.</Text>
          <Grid is_flex >
              <Grid is_flex >
                  <Grid flex = "flex"> 
                <Text bold>{`${props.nickname} ·`}</Text>
                <Text margin = "0px 0px 0px 5px">{props.createdAt}</Text>
            </Grid>
            
            <Button width = "100px" height = "35px" flex borderRadius ="50px" border = "1px solid rgb(173, 181, 189)" bg = "white">
            <svg width="20" height="20" viewBox="0 0 24 24">
            <path fill="rgb(173, 181, 189)" d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"></path></svg>
            <Text color = "rgb(173, 181, 189)">{props.like}</Text>
            </Button>     
            </Grid>
            
        </Grid>  


        </Grid>
        </>

    )
}

Detail.defaultProps = {
    title :"안녕",
    content : "너무 너무 어려워 ㅇ    ㅁㄴㄹㄴㅇㄹㅇㄴㄹㅇㄴㄹㅇㄴㄹㄹ      ㅏㅓㅏ  ㅓㅏㅓㅣ    ㄴㅇㅁㄹㄴㅇㄹㄴㅇㄴㅇㄹㅇㄹㄴㅇㄹㅓㅏ    ㅣ      ㅟㅏ",
    createdAt : "2021년 12월 13일",
    nickname : "윤석준",
    like:"20",
}

export default Detail