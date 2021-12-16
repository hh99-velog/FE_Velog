import React,{useState} from "react";
import styled from "styled-components";
import { withRouter } from 'react-router-dom'
import { useSelector,useDispatch } from "react-redux";

//컴포넌트
import {Grid,Button} from "../elements/ElementIndex";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import Nav from "./Nav";

// JS파일
import { history } from "../redux/configureStore";
import { AiFillCaretDown } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { actionCreators as modalActions} from '../redux/modules/modal'


const Header = (props) => {

    const dispatch = useDispatch()

    // login 분기에 따라 header 설정
    const is_login = localStorage.getItem("token");

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

    // addPost
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
                {/* <div className="iconBox">
                    <FiSearch margin='0 0 0 auto' size='20px'></FiSearch>
                </div> */}
                {/* 로그인 여부에 따라 분기 */}
                {!is_login
                    ?<Button _onClick={signInModal} margin='0 0 0 10px' hoverBg='#555' hoverColor='#fff' borderRadius='30px' border='1px solid #555' padding='5px 16px' bg='#fff' color='#555' size='0.8rem' bold>로그인</Button>
                    :null
                }
                {is_login
                    ?<Grid is_flex margin='0 0 0 10px'>
                        <Button _onClick={addPost} hoverBg='#555' hoverColor='#fff' borderRadius='30px' padding='5px 16px' color='#555' size='0.8rem' bold>새 글 작성</Button>
                        <Grid _onClick={navBtn} cursor='pointer' width='auto' margin='0 0 0 10px' is_flex>
                            <Profile alt ="프로필 이미지" src="https://reacteek-1.s3.ap-northeast-2.amazonaws.com/ch-1.png"></Profile>
                            <AiFillCaretDown color='#777' size='12px'></AiFillCaretDown>
                        </Grid>
                    </Grid>
                    :null
                }
                {/* nav */}
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
    .iconBox {
        width: auto;
    }
    @media only screen and (max-width: 1730px) {
        padding :0 20px
    }

`
const Profile = styled.img`
    width: 2.5rem;
        height: 2.5rem;
        border-radius:50%;
`
export default withRouter(Header)