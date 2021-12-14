import React from 'react';
import styled from "styled-components"

import Grid  from '../elements/Grid';
import Text from '../elements/Text'
import Image from '../elements/Image';

import { history } from '../redux/configureStore'

const Post = (props) => {
    return(
   
     
        <Grid postEvent flex="flex" height = "auto" margin = "1rem" width= "23% "   bg = "white" borderRadius ="4px" boxShadow = "rgb(0 0 0 / 4%) 0px 4px 16px 0px" 
         transition = "box-shadow 0.25s cubic-bezier(0.47, 0, 0.75, 0.72) 0s, transform 0.25s ease-in 0s" overFlow = "hidden" flexDirection = "column" 
         _onClick ={()=> {history.push(`/main/${props.post_id}`)}}>  
        <Grid  is_flex position = "relative" margin = "0 auto"width =  "100%" borderRadius = "4px" >
            <Image/>
        </Grid>
        <Grid  flex="flex"  flexDirection = "column" padding ="1rem">
            <Grid >
           <Text margin = "10px 0px"bold size = "35px">{props.title}</Text>
           </Grid>
           <Grid  margin = "0px 0px 1.5rem">
           <Text size = "20px">{props.content}</Text>
           </Grid>  
           <Grid>
            <Text font-size = "0.75rem" color = "rgb(134, 142, 150)">{props.createdAt}</Text>
            </Grid>
        </Grid>
        <Grid  is_flex padding = "0.625rem 1rem"  borderTop ="1px solid rgb(248, 249, 250)">
            <Text bold >{`By ${props.nickname}`}</Text>
            <Grid  is_flex width  >
            <svg  width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"></path></svg>
            <Text margin = "0px 10px 0px 15px"  bold>{props.like}</Text>
            </Grid>
        </Grid>
    </Grid>

   
    )
}
 

Post.defaultProps = {
    title :"안녕",
    content : "너무 너무 어려워 ㅇ    ㅁㄴㄹㄴㅇㄹㅇㄴㄹㅇㄴㄹㅇㄴㄹㄹ      ㅏㅓㅏ  ㅓㅏㅓㅣ    ㄴㅇㅁㄹㄴㅇㄹㄴㅇㄴㅇㄹㅇㄹㄴㅇㄹㅓㅏ    ㅣ      ㅟㅏ",
    createdAt : "2021년 12월 13일",
    nickname : "윤석준",
    like:"5",
}



export default Post


