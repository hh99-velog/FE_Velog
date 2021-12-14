import React from 'react';
import styled from "styled-components"

import Grid  from '../elements/Grid';
import Text from '../elements/Text'
import Image from '../elements/Image';

import { history } from '../redux/configureStore'

const Post = (props) => {

    const list = props.list

    return(
    <PostWrap>
        <Grid postEvent flex="flex" height = "auto" bg = "white" borderRadius ="4px" boxShadow = "rgb(0 0 0 / 4%) 0px 4px 16px 0px" overFlow = "hidden" flexDirection = "column" _onClick ={()=> {history.push(`/main/${list.board_id}`)}}>  
            <Grid is_flex position = "relative" margin = "0 auto" width =  "100%" borderRadius = "4px" >
                <Image src={list.img}/>
            </Grid>
            <Grid  flex="flex"  flexDirection = "column" padding ="1rem">
                <Grid>
                    <Text margin = "10px 0px"bold size = "35px">{list.title}</Text>
                </Grid>
                <Grid  margin = "1rem 0">
                    <p className='contents'>{list.content}</p>
                </Grid>  
                <Grid>
                    <Text size = "1rem" color = "rgb(134, 142, 150)">{list.createdAt}</Text>
                </Grid>
            </Grid>
            <Grid  is_flex padding = "0.625rem 1rem"  borderTop ="1px solid rgb(248, 249, 250)">
                <Text size = "1rem" bold >{`By ${list.nickname}`}</Text>
                <Grid  is_flex width  >
                    <svg  width="14" height="14" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"></path></svg>
                    <Text margin = "0px 10px 0px 5px"  bold>{list.like}</Text>
                </Grid>
            </Grid>
        </Grid>
    </PostWrap>
    )
}

const PostWrap = styled.div`
    width: calc((100% - 80px)/5);
    cursor: pointer;
    gap:20px;
    @media only screen and (max-width: 1730px) {
        width: calc((100% - 60px)/4);
    }
    @media only screen and (max-width: 1430px) {
        width: calc((100% - 40px)/3);
    }
    @media only screen and (max-width: 1030px) {
        width: calc((100% - 20px)/2);
    }
    @media only screen and (max-width: 768px) {
        width: 100%;
    }
    .contents {
        font-size:14px;
        margin:0 ;
        overflow: hidden;
        white-space: normal;
        text-overflow: ellipsis;
        line-height: 1.2em;
        word-wrap: break-word;
        -webkit-line-clamp: 2 ;
        -webkit-box-orient: vertical;
        height: 2.4em;

    }
`

Post.defaultProps = {
    title :"안녕",
    content : "안녕하세요 저는 윤석준이라고 합니다!!!!!!!!!!",
    createdAt : "2021년 12월 13일",
    nickname : "윤석준",
    like:"5",
}



export default Post


