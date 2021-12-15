import React,{useState} from "react";
import styled from "styled-components";

//컴포넌트
import {Grid,IconButton,Text} from "../elements/ElementIndex";

const AddComments = (props) => {
 
    return(
       <AddCommentsStyle>
           <Text margin='0 0 10px 0' color='#555' bold>4개의 댓글</Text>
           <textarea placeholder="댓글을 입력해 주세요"></textarea>
           <button>댓글 작성</button>
       </AddCommentsStyle>
    )
}

const AddCommentsStyle = styled.div`
    width: 100%;
    box-sizing:border-box;
    
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
        width: 14%;
        padding:7px 0;
        margin: 10px 0 0 auto; 
        border: none;
        cursor: pointer;
        border-radius:5px;
        background-color: rgb(18, 184, 134);
        color:#fff;
        font-size:15px;
        font-weight:bold
    }

`

export default AddComments