import React from "react";
import styled from "styled-components";

//컴포넌트
import {Grid,Text,Button} from "../elements/ElementIndex";

const CommentList = (props) => {

    // Comment Delete API 요청
    const deleteComment = () => {
        console.log('댓글삭제')
    }

    return(
       <CommentsStyle>
           <Grid is_flex>
                <Text margin='0 0 10px 0' color='#555' bold>아이디</Text>
                <Button onClick={deleteComment}>삭제</Button>
           </Grid>
           <Text margin='0 0 10px 0' color='#777' size='14px'>4개의 댓글</Text>
       </CommentsStyle> 
    )
}

//CommentList STYLE
const CommentsStyle = styled.div`
    width: 100%;
    box-sizing:border-box;
    margin: 20px 0;
    
    button {
        width: auto;
        background: none;
        border: none;
        cursor: pointer;
        transition: all 0.2s
        border-radius: 5px
    }
    button:hover {
        background: #eee;
        transition: all 0.2s
    }

`

export default CommentList