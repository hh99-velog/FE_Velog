import React from "react";
import styled from "styled-components";
import { useDispatch} from "react-redux";

// 컴포넌트
import {Text} from "../elements/ElementIndex";

// JS
import { actionCreators as likeActions} from '../redux/modules/like'

const LikeBtn = (props) => {

    const dispatch = useDispatch()
    const {like,states,id} = props

    const addLike = () => {
        dispatch(likeActions.addLikeDB(id))
    }

    const deleteLike = () => {
        dispatch(likeActions.deleteLikeDB(id))
    }

    if(states === 'false') {
        return (
            <React.Fragment>
                    <AddLikeBtnStyle onClick={deleteLike}>
                    <svg width="20" height="20" viewBox="0 0 24 24">
                        <path
                        fill="#ff7575"
                        d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"
                        ></path>
                    </svg>
                    <Text margin='0 0 0 10px' color="#ff7575">{like}</Text>
                    </AddLikeBtnStyle>
            </React.Fragment>
        );
    }
    
    if(states === 'true') {
        return (
            <React.Fragment>
                    <LikeBtnStyle onClick={addLike}>
                    <svg width="20" height="20" viewBox="0 0 24 24">
                        <path
                        fill="rgb(173, 181, 189)"
                        d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"
                        ></path>
                    </svg>
                    <Text margin='0 0 0 10px' color="rgb(173, 181, 189)">{like}</Text>
                    </LikeBtnStyle>
            </React.Fragment>
        );
    }
    return (
        <React.Fragment>

        </React.Fragment>
    )
};

const LikeBtnStyle = styled.button`
    width: 100px;
    height: 35px;
    display:flex;
    border-radius: 20px;
    background: #fff;
    border: 1px solid rgb(173, 181, 189);
    cursor: pointer;
    justify-content: center;
    align-items:center;
    transition: all 0.2s;
    &:hover{
        opacity:0.8;
        transition: all 0.2s;
    }
`

const AddLikeBtnStyle = styled.button`
    width: 100px;
    height: 35px;
    display:flex;
    border-radius: 20px;
    background: #fff;
    border: 1px solid #ff7575;
    cursor: pointer;
    justify-content: center;
    align-items:center;
    transition: all 0.2s;
    &:hover{
        opacity:0.8;
        transition: all 0.2s;
    }
`

export default LikeBtn;
