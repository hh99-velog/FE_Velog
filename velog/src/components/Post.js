import React from 'react';
import styled from "styled-components"

//컴포넌트
import {Grid,Text,Image} from "../elements/ElementIndex";
import MarkdownRender from './Makrdown';

//JS파일
import { history } from "../redux/configureStore";

const Post = (props) => {

    // Main page get API 요청 데이터
    const list = props.list

    // 상세페이지 이동
    const goDetail = () => {
        history.push(`/main/${list.id}`)
    }

    // 이미지가 없을경우
    if(list.img === '') {
        return(
            <PostWrap>
                <Grid padding ="1rem">
                    <Grid _onClick ={goDetail} cursor='pointer'>
                        <Text margin = "10px 0px" bold size = "26px">{list.title}</Text>
                    </Grid>
                    <Grid _onClick ={goDetail} cursor='pointer' margin = "1rem 0">
                        <p className='contents'>
                            <MarkdownRender>{list.content}</MarkdownRender>
                        </p>
                    </Grid>  
                    <Grid>
                        <Text size = "1rem" color = "rgb(134, 142, 150)">{list.createdAt}</Text>
                    </Grid>
                </Grid>
                <Grid _onClick ={goDetail} cursor='pointer'>
                    <Image src={list.img}/>
                </Grid>
                <Grid is_flex padding = "0.625rem 1rem"  borderTop ="1px solid rgb(248, 249, 250)">
                    <Text cursor='pointer' size = "1rem" bold >{`By ${list.nickname}`}</Text>
                    <Grid is_flex width  >
                        <svg  width="14" height="14" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"></path>
                        </svg>
                        <Text margin = "0px 10px 0px 5px"  bold>{list.like}</Text>
                    </Grid>
                </Grid>
            </PostWrap>
        )
    }

    // Default
    return(
        <PostWrap>
            <Grid _onClick ={goDetail} cursor='pointer'>
                <Image src={list.img}/>
            </Grid>
            <Grid padding ="1rem">
                <Grid _onClick ={goDetail} cursor='pointer'>
                    <p className='textPreview'>{list.title}</p>
                </Grid>
                <Grid _onClick ={goDetail} cursor='pointer' margin = "1rem 0">
                    <p className='contents'>
                        <MarkdownRender>{list.content}</MarkdownRender>
                    </p>
                </Grid>  
                <Grid>
                    <Text size = "1rem" color = "rgb(134, 142, 150)">{list.createdAt}</Text>
                </Grid>
            </Grid>
            <Grid is_flex padding = "0.625rem 1rem"  borderTop ="1px solid rgb(248, 249, 250)">
                <Text cursor='pointer' size = "1rem" bold >{`By ${list.nickname}`}</Text>
                <Grid is_flex width  >
                    <svg  width="14" height="14" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"></path>
                    </svg>
                    <Text margin = "0px 10px 0px 5px"  bold>{list.like}</Text>
                </Grid>
            </Grid>
        </PostWrap>
    )
}

// PostWrap component
const PostWrap = styled.div`
    border-radius: 5px;
    background: #fff;
    box-shadow:rgb(0 0 0 / 4%) 0px 4px 16px 0px;

    // hover animation
    transition: box-shadow 0.2s ease-in 0s, 
    transform 0.2s ease-in 0s;
    &:hover {
        transform: translateY(-8px);
        box-shadow: rgb(0 0 0 / 8%) 0px 12px 20px 0px; 
    } 

    // 반응형 사이즈
    width: calc((100% - 80px)/5);
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

    // content preview 설정
    .textPreview {
        box-sizing: border-box;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        font-weight: 700;
        color: #333;
        font-size: 26px;
        margin: 10px 0px;
    }
    .contents {
        font-size:14px;
        margin:0 ;
        display:-webkit-box; 
        word-wrap:break-word; 
        -webkit-line-clamp:2; 
        -webkit-box-orient:vertical; 
        overflow:hidden; 
        text-overflow:ellipsis; 
        line-height:1.2rem; 
        height:2.4rem; 
        color:#444; 
        text-decoration:none;
    }
    // markdown 글자크기 고정
    .contents > h1,h2,h3,h4,h5,h6,p {
        font-size:1rem;
        font-weight:500;
    }
`

Post.defaultProps = {
    title :"제목",
    content : "콘텐츠",
    createdAt : "2021-12-13",
    nickname : "닉네임",
    like:"5",
}



export default Post


