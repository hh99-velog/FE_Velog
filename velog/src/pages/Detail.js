import React,{useState} from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
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

const Detail = (props) => {
  const dispatch = useDispatch()
  // board_id 구하기
  const pathName = props.location.pathname
  const boardId = pathName.split('/')  

  const token = window.localStorage.getItem('token')
  const nickName = window.sessionStorage.getItem('id')

  React.useEffect(() => {
    dispatch(detailActions.getDetailDB(boardId[2]))
    dispatch(likeActions.getLikeDB(boardId[2]))
    dispatch(commentActions.getCommentsDB(boardId[2]))
    return () => {
      dispatch(detailActions.resetDetail())
    }
  },[])

  const list = useSelector((state) => state.detail.list)
  const like = useSelector((state) => state.like.list)
  const comment = useSelector((state) => state.comment.list)

  const commentList = comment ? [...comment] : []

  const editBnt = () => {
    history.push(`/editpost/${boardId[2]}`)
  }

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
        dispatch(detailActions.deleteDetailDB(boardId[2]))
        Swal.fire(
          '삭제되었습니다',
          '더 좋은 글을 올려주세요 :)',
          'success'
        )
        history.push('/')
      }
    })
  }

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
            {token
            ?<Grid width='auto' is_flex>
              {nickName===list.nickname
                ?<>
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
          <AddComments board_id={boardId[2]}></AddComments>
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
