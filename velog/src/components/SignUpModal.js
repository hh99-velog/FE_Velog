import React,{useState} from "react";
import styled from "styled-components";
import { useSelector,useDispatch } from "react-redux";

//컴포넌트
import {Grid,Text,Button,Input} from "../elements/ElementIndex";

//JS
import { apis } from '../shared/axios'
import { actionCreators as userActions} from '../redux/modules/user'
import { actionCreators as modalActions} from '../redux/modules/modal'
import { emailCheck,checkPassword } from "../shared/signupCheck";

const SignInModal = (props) => {
    
    const dispatch = useDispatch()

    // 회원가입 정보 관리
    const [id, setId] = useState('')
    const [pwd, setPwd] = useState('')
    const [pwdCheck, setPwdCheck] = useState('')
    const [userName, setUserName] = useState('')
    
    // 로그인창으로 이동
    const signInModal = () => {
        dispatch(modalActions.setInModal())
    }

    //아이디 체크 
    const idDuplicate = () => {
        console.log('아이디체크')
        apis
        .idDuplicate(id)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    // 닉네임 체크
    const nickNameDuplicate = () => {
        console.log('닉네임체크')
        apis
        .nickNameDuplicate(userName)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    // 회원가입
    const signUp = () => {
        if(id==='' || pwd ==='' || pwdCheck==='' || userName==='') {
            alert('회원정보를 입력해주세요')
            return
        }
        dispatch(userActions.signupDB(id,pwd,userName,pwdCheck))
        dispatch(modalActions.setInModal())
        console.log(id,pwd,userName,pwdCheck)
    }

    const exit = () => {
        dispatch(modalActions.ExitModal())
    }

    return(
        <SignUp>
            <ModalInner>
                <ImgBox>
                    <img alt="환영합니다!" src='https://static.velog.io/static/media/undraw_joyride_hnno.fae6b95e.svg'></img>
                    <Text size='1.5rem' margin='10px 0' bold>환영합니다!</Text>
                </ImgBox>
                <InputBox>
                    <Text margin='10px 0' size='22px' bold>회원가입</Text>
                    <Text margin='10px 0' size='14px'>어서오세요 반갑습니다!</Text>
                    <Grid position='relative'>
                        <Input  _onChange={(e)=>{setId(e.target.value)}} margin='10px 0' width='100%' padding="15px" placeholder='이메일 형식으로 입력해주세요'></Input>
                        <CheckBtn>
                            <Button _onClick={idDuplicate} border='none' padding='5p 20px' bg='#fff' color='rgb(18, 184, 134)' size='0.75rem' bold >Check</Button>
                        </CheckBtn>
                    </Grid>
                    {id===''?null:<Text margin='-11px 0 0 0' size='0.55rem' color={emailCheck(id)?'rgb(18, 184, 134)':'red'}>{emailCheck(id)?'알맞은 이메일 형식입니다':'잘못된 이메일 형식입니다'}</Text>}
                    <Grid position='relative'> 
                        <Input _onChange={(e)=>{setUserName(e.target.value)}} margin='10px 0' width='100%' padding="15px" placeholder='닉네임을 입력해주세요'></Input>
                        <CheckBtn>
                            <Button _onClick={nickNameDuplicate} border='none' padding='5p 20px' bg='#fff' color='rgb(18, 184, 134)' size='0.75rem' bold >Check</Button>
                        </CheckBtn>
                    </Grid>
                    <Input _onChange={(e)=>{setPwd(e.target.value)}} type='password' margin='10px 0' width='100%' padding="15px" placeholder='6 ~ 10자 영문, 숫자 조합'></Input>
                    {pwd===''?null:<Text margin='-11px 0 0 0' size='0.55rem' color={checkPassword(pwd)?'rgb(18, 184, 134)':'red'}>{checkPassword(pwd)?'알맞은 비밀번호입니다':'잘못된 비밀번호입니다'}</Text>}
                    <Input _onChange={(e)=>{setPwdCheck(e.target.value)}} type='password' margin='10px 0' width='100%' padding="15px" placeholder='패스워드를 다시 입력해주세요'></Input>
                    {pwdCheck===''?null:<Text margin='-11px 0 0 0' size='0.55rem' color={pwd===pwdCheck?'rgb(18, 184, 134)':'red'}>{pwd===pwdCheck?'비밀번호가 같습니다':'비밀번호가 다릅니다'}</Text>}
                    <Button margin='10px 0' _onClick={signUp} width='100%' cursor='pointer' borderRadius='3px' border='1px solid rgb(18, 184, 134)' padding='10px 20px' bg='rgb(18, 184, 134)' color='#fff' size='16px' bold>회원가입</Button>
                    <Grid margin='10px 0' is_flex>
                        <Text size='0.9rem' bold margin='0 10px 0 auto' color='#777'>계정이 있으신가요?</Text>
                        <Button _onClick={signInModal} width='auto' border='none' cursor='pointer' padding='5p 20px' bg='#fff' color='rgb(18, 184, 134)' size='1rem' bold >로그인</Button>
                    </Grid>
                </InputBox>
                <ExitBtn onClick={exit}>X</ExitBtn>
            </ModalInner>
        </SignUp>
    )
}

//SignInModal STYLE
const SignUp = styled.div`
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 110%;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 10;
    transition:all 0.2s;
`;

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
  @media only screen and (max-width:  768px) {
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
const CheckBtn = styled.div`
    width: auto;
    position: absolute;
    top:22px;
    right:10px;
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


