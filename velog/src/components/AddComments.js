import React,{useState} from "react";
import styled from "styled-components";

//컴포넌트
import {Button,Text} from "../elements/ElementIndex";

const AddComments = (props) => {

    // comment state 관리
    const [comment,setComment] = useState()

    // add comment API 요청
    const addComment = () => {
        console.log(comment)
    }

    return(
       <AddCommentsStyle>
            <Text margin='0 0 10px 0' color='#555' bold>4개의 댓글</Text>
            <textarea onChange={(e)=>{setComment(e.target.value)}} placeholder="댓글을 입력해 주세요" />
            <Button _onClick={addComment}>댓글 작성</Button>
       </AddCommentsStyle>
    )
}

// AddCommentsStyle STYLE
const AddCommentsStyle = styled.div`
    width: 100%;
    box-sizing:border-box;

    // 코멘트 등록창
    textarea {
        box-sizing:border-box;
        width: 100%;
        padding:14px;
        color:#777;
        resize: none;
        font-size:16px;
        border: 1px solid #aaa;
        border-radius:5px;
    }
    button {
        display: block;
        width: 20%;
        padding:7px 0;
        margin: 10px 0 0 auto; 
        border: none;
        border-radius:5px;
        background-color: rgb(18, 184, 134);
        color:#fff;
        font-size:15px;
        font-weight:bold
    }

`

export default AddComments