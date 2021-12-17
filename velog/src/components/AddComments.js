import React,{useState,useRef} from "react";
import styled from "styled-components";
import { useDispatch} from "react-redux";

//컴포넌트
import {Button,Text} from "../elements/ElementIndex";

//JS
import { actionCreators as commentActions} from '../redux/modules/comment'

const AddComments = (props) => {

    const dispatch = useDispatch()
    const textRef = useRef()
    // 닉네임 받아오기
    const nickName = window.sessionStorage.getItem('nickname')

    // comment state 관리
    const [comment,setComment] = useState()

    // add comment API 요청
    const addComment = () => {
        const data = {
            content:comment,
            nickname:nickName
        }
        dispatch(commentActions.addCommentsDB(props.board_id,data))
        setComment('')
    }

    return(
       <AddCommentsStyle>
            <Text margin='0 0 10px 0' color='#555' bold>{props.cmtCount}개의 댓글</Text>
            <textarea 
                ref={textRef}
                value={comment}
                onChange={(e)=>{setComment(e.target.value)}} 
                placeholder="댓글을 입력해 주세요" 
            />
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