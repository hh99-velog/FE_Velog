import React,{useState} from "react";
import styled from "styled-components";
import { withRouter } from 'react-router-dom'
import { useSelector,useDispatch } from "react-redux";

//컴포넌트
import {Grid,Button,Text} from "../elements/ElementIndex";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import Nav from "./Nav";

// JS파일
import { history } from "../redux/configureStore";
import { AiFillCaretDown } from "react-icons/ai";
import { actionCreators as modalActions} from '../redux/modules/modal'


const Header = (props) => {

    const dispatch = useDispatch()

    // login 분기에 따라 header 설정
    const id = window.sessionStorage.getItem("nickname")

    // modal state
    const inModal = useSelector((state) => state.modal.inModal)
    const upModal = useSelector((state) => state.modal.upModal)

    // 로그인 모달 호출
    const signInModal = () => {
        dispatch(modalActions.setInModal())
    }

    // NavBar 설정
    const [nav,setNav] = useState(false)
    const navBtn = () => {
        if(nav) {
            setNav(false)
        } else {
            setNav(true)
        }
    }

    // AddPost Page 이동
    const addPost = () => {
        setNav(false)
        history.push('/addpost')
    }

    // 홈버튼
    const home = () => {
        setNav(false)
        history.push('/')
    }

    // 생성과 수정페이지에서는 보이지 않음
    if(props.location.pathname === '/addpost' || props.location.pathname.split('/')[1] === 'editpost') {
        return null
    }

    return(
        <HeaderStyle>
            <h1 onClick={home}>Velgo</h1>
            <Grid position='relative' is_flex width='auto'>
                {!id
                    ?<Button 
                        _onClick={signInModal} 
                        margin='0 0 0 10px' 
                        hoverBg='#555' 
                        hoverColor='#fff' 
                        borderRadius='30px'
                        border='1px solid #555'
                        padding='5px 16px' 
                        bg='#fff' 
                        color='#555' 
                        size='0.8rem' 
                        bold
                    >로그인</Button>
                    :null
                }
                {id
                    ?<Grid is_flex margin='0 0 0 10px'>
                        <Button 
                            _onClick={addPost} 
                            width='auto' 
                            hoverBg='#555' 
                            hoverColor='#fff' 
                            borderRadius='30px' 
                            padding='5px 16px' 
                            color='#555' 
                            size='0.8rem' 
                            bold
                        >새 글 작성</Button>
                        <Grid _onClick={navBtn} cursor='pointer' width='auto' margin='0 0 0 10px' is_flex>
                            <Text size='14px' bold>{id}님</Text>
                            <AiFillCaretDown color='#777' size='12px'></AiFillCaretDown>
                        </Grid>
                    </Grid>
                    :null
                }
                {/* Nav Bar */}
                <Nav nav={nav}/>
            </Grid>
            {/* 로그인,회원가입 모달관리 */}
            {inModal ? <SignInModal /> : null}
            {upModal ? <SignUpModal /> : null}
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
    width: 100%;
    max-width: 1730px;
    margin:0 auto;
    box-sizing:border-box;
    display:flex;
    height:64px;
    align-items:center;  
    justify-content: space-between;
    h1{
        margin:0;
        font-weight:500;
        font-size:26px;
        color:#777;
        cursor:pointer;
    }
    @media only screen and (max-width: 1730px) {
        padding :0 20px
    }

`
export default withRouter(Header)