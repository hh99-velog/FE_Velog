import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector} from "react-redux";

import { actionCreators as detailActions} from '../redux/modules/Detail'
import { actionCreators as likeActions} from '../redux/modules/like'
import { actionCreators as commentActions} from '../redux/modules/comment'
import Swal from 'sweetalert2'

// 컴포넌트
import {Text,Grid,Button} from "../elements/ElementIndex";
import MarkdownRender from "../components/Makrdown";
import AddComments from "../components/AddComments";
import CommentList from "../components/CommentList";
import LikeBtn from "../components/LikeBtn";

// JS
import { history } from "../redux/configureStore";
import { actionCreators as detailActions} from '../redux/modules/detail'
import { actionCreators as likeActions} from '../redux/modules/like'
import { actionCreators as commentActions} from '../redux/modules/comment'


const Detail = (props) => {

    const dispatch = useDispatch()

    // board_id 구하기
    const pathName = props.location.pathname
    const boardId = pathName.split('/')  

    // token & nickname 가져오기
    const token = window.localStorage.getItem('token')
    const nickName = window.sessionStorage.getItem('nickname')

    // 초기값 설정
    const setDetail = () => {
        dispatch(detailActions.getDetailDB(boardId[2]))
        dispatch(likeActions.getLikeDB(boardId[2]))
        dispatch(commentActions.getCommentsDB(boardId[2]))
    }

    // 리셋 설정
    const resetDetail = () => {
        dispatch(detailActions.resetDetail())
    }

    // 상세페이지,좋아요,댓글 Get Api 요청
    React.useEffect(() => {
        
        setDetail()
        return resetDetail()
    },[])

    // 상세페이지,좋아요,댓글 data 가져오기
    const list = useSelector((state) => state.detail.list)
    const like = useSelector((state) => state.like.list)
    const comment = useSelector((state) => state.comment.list)

    // 코멘트가 없을경우 빈배열 반환
    const commentList = comment ? [...comment] : []

    // 수정페이지로 이동
    const editBnt = () => {
        history.push(`/editpost/${boardId[2]}`)
    };

    // 삭제 API 요청
    const deleteBtn = async () => {
        Swal.fire({
            title: '되돌릴수 없어요!',
            text: "정말 삭제하시겠습니까?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                // delete 버튼 클릭시 삭제요청
                dispatch(detailActions.deleteDetailDB(boardId[2]))
                Swal.fire(
                    '삭제되었습니다',
                    '더 좋은 글을 올려주세요 :)',
                    'success'
                )
                history.push('/')
            };
        });
    };

    return (
        <DetailStyle margin="0 auto" padding='40px 0'>
            <Text margin="0px 0px 32px 0px" bold size="45px">
                {list.title}
            </Text>
            <Grid is_flex>
                <Grid is_flex>
                    <Text width='auto' bold>by {`${list.nickname}`}</Text>
                    <Text width='auto' margin='0 auto 0 10px' size='14px'>{list.createdAt}</Text>
                </Grid>
                {token?
                <Grid width='auto' is_flex>
                    {nickName===list.nickname?
                    <>
                    <Button _onClick={editBnt} bg='transparent' size='14px' width='50px' border='none' hoverColor='#000'>수정</Button>
                    <Button _onClick={deleteBtn} bg='transparent' size='14px' width='50px' border='none' hoverColor='#000' margin='0 10px 0 0'>삭제</Button>
                    </>
                    :null}
                    <LikeBtn id={boardId[2]} states={like[1]} like={like[0]}></LikeBtn>
                </Grid>
                :null}
            </Grid>
            <Grid margin='40px 0'>
                {list.img?<img width='100%' alt='본문이미지' src={list.img} borderRadius= "0px"/>:null}
                <MarkdownRender>{list.content}</MarkdownRender>
            </Grid>
            {/* Comment Add */}
            <AddComments cmtCount={commentList.length} board_id={boardId[2]}></AddComments>
            {/* Comment List */}
            {commentList.map((cd,idx) => {
              return(
                <CommentList board_id={boardId[2]} cd={cd}></CommentList>
              )
            })}
        </DetailStyle>
      
    );
};

Detail.defaultProps = {
  title: "안녕",
  content: "콘텐츠",
  createdAt: "2021년 12월 13일",
  nickname: "윤석준",
  like: "20",
};

// DetailStyle component
const DetailStyle = styled.div`
  box-sizing:border-box;
  max-width:800px;
  width: 100%;
  margin: 0 auto;
  padding: 0 0 100px 0;

  @media only screen and (max-width: 768px) {
    padding: 0 20px 80px 20px;
  }
`


export default Detail;
