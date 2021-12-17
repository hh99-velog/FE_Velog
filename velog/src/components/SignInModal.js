import React,{useState} from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

//컴포넌트
import {Grid,Text,Button,Input} from "../elements/ElementIndex";

//JS
import { actionCreators as userActions} from '../redux/modules/user'
import { actionCreators as modalActions} from '../redux/modules/modal'

const SignInModal = (props) => {

    const dispatch = useDispatch()

    // 로그인 정보 관리
    const [id, setId] = useState('')
    const [pwd, setPwd] = useState('')
    
    // 회원가입으로 이동
    const signUpModal = () => {
        dispatch(modalActions.setUpModal())
    }

    // 로그인
    const signIn = () => {
        if(id==='' || pwd ==='') {
            alert('회원정보를 입력해주세요')
            return
        }
        dispatch(userActions.signinDB(id,pwd))
        dispatch(modalActions.ExitModal())
    }

    // 취소버튼
    const exit = () => {
        dispatch(modalActions.ExitModal())
    }

    return(
        <SignIn>
            <ModalInner>
                <ImgBox>
                    <img alt="환영합니다!" src='https://static.velog.io/static/media/undraw_joyride_hnno.fae6b95e.svg'></img>
                    <Text size='1.5rem' margin='10px 0' bold>환영합니다!</Text>
                </ImgBox>
                <InputBox>
                    <Text margin='10px 0' size='22px' bold>로그인</Text>
                    <Text margin='10px 0' size='14px'>어서오세요 반갑습니다!</Text>
                    <Input _onChange={(e)=>{setId(e.target.value)}} margin='10px 0' width='100%' padding="15px" placeholder='아이디를 입력해주세요'></Input>
                    <Input _onChange={(e)=>{setPwd(e.target.value)}} margin='10px 0' width='100%' padding="15px" placeholder='패스워드를 입력해주세요' type='password'></Input>
                    <Button _onClick={signIn} margin='10px 0'  borderRadius='3px' border='1px solid rgb(18, 184, 134)' padding='10px 20px' bg='rgb(18, 184, 134)' color='#fff' size='16px' bold>로그인</Button>
                    <Grid margin='10px 0' is_flex>
                        <Text size='0.9rem' bold margin='0 10px 0 auto' color='#777'>회원이 아니신가요?</Text>
                        <Button _onClick={signUpModal} width='auto' border='none' padding='5p 20px' bg='#fff' color='rgb(18, 184, 134)' size='1rem' bold >회원가입</Button>
                    </Grid>
                </InputBox>
                <ExitBtn onClick={exit}>X</ExitBtn>
            </ModalInner>
        </SignIn>
    )
}

//SignInModal STYLE
const SignIn = styled.div`
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 110%;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 10;
    transition:all 0.2s;
    animation: modal-show 0.3s;
    @keyframes modal-show {
        from {
            opacity: 0;
            margin-top: -5%;
        }
        to {
            opacity: 1;
            margin-top: 0;
        }
    }
`

const ModalInner = styled.div`
  width: 80%;
  max-width: 600px;
  position:relative;
  margin: auto;
  height: auto;
  background-color: #fff;
  margin-top: 200px;
  box-shadow:0px 0px 1px 2px #eee;
  display:flex;
  @media only screen and (max-width:  480px) {
    width: 100%;
    margin-top:0;
    height:100%
    }
`
const ImgBox = styled.div`
    display:flex;
    padding: 20px;
    width: 30%;
    background: #eee;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        width: 100%;
        height:auto
    }
    @media only screen and (max-width: 768px) {
        display:none;
    }
`

const ExitBtn = styled.button`
    width: auto;
    position: absolute;
    top:10px;
    right:10px;
    cursor:pointer;
    font-weight:bold;
    font-size:18px;
    border:none;
    background: #fff;
    color:#777;
`

const InputBox = styled.div`
    width: 70%;
    padding:20px 30px;
    @media only screen and (max-width: 768px) {
        width: 100%;
        margin: 80px 0 auto 0;
    }
`

export default SignInModal