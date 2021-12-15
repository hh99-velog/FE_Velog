import React,{useEffect} from 'react'
import styled from "styled-components"
import { useDispatch,useSelector } from 'react-redux'
import { history } from '../redux/configureStore'
import Swal from 'sweetalert2'

import Grid from "../elements/Grid"
import Post from "../components/Post"

// API
import { actionCreators as postActions} from '../redux/modules/main'

const Main = (props) => {
    const dispatch = useDispatch()

    // 패스값 가져오기
    const pathName = history.location.pathname;
    const name = pathName.split("/");

    useEffect(() => {
        dispatch(postActions.getPostListDB())
    },[])

    const lists = useSelector((state) => state.main.list)
    const list = lists.map(s =>s)
    
    // 최신순 정렬
    if(name[1] === 'recent') {
        list.sort((a,b) => {
            return Number(b.board_id) - Number(a.board_id)
        })
        return(
            <MainStyle>
                {list.map((list,index) => {
                    return(
                        <Post list={list}/>
                    )
                })}
            </MainStyle>
        )
    }
    
    // 좋아요 정렬
    list.sort((a,b) => {
        return Number(b.like) - Number(a.like)
    })
    return (
        <MainStyle>
            {list.map((list,index) => {
                return(
                    <Post list={list}/>
                )
            })}
        </MainStyle>
    )
}

const MainStyle = styled.div`
    display: flex;
    width: 100%;
    max-width: 1730px;
    margin:20px auto 0 auto;
    flex-wrap:wrap;
    gap:20px;
    box-sizing:border-box;
    @media only screen and (max-width: 1730px) {
        padding: 0 20px;
    }
  `

export default Main