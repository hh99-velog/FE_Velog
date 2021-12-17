import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector} from "react-redux";

//컴포넌트
import {Grid,Text,Button} from "../elements/ElementIndex";

import { actionCreators as commentActions} from '../redux/modules/comment'

const CommentList = (props) => {

    const dispatch = useDispatch()
    const comment = props.cd

    // Comment Delete API 요청
    const deleteComment = () => {   
        dispatch(commentActions.deleteCommentsDB(comment.id))
    }



    return(
       <CommentsStyle>
           <Grid is_flex>
                <Text margin='0 0 10px 0' color='#555' bold>{comment.nickname}</Text>
                <Button _onClick={deleteComment}>삭제</Button>
           </Grid>
           <Text margin='0 0 10px 0' color='#777' size='14px'>{comment.content}</Text>
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