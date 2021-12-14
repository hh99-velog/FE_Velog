import React,{useState} from "react";
import styled from "styled-components";
import { withRouter } from 'react-router-dom'
import { apis } from '../shared/axios'

//컴포넌트
import {Grid,IconButton,Button,Text,Input} from "../elements/ElementIndex";

// JS파일
import { emailCheck,checkPassword } from "../shared/signupCheck";
import { history } from "../redux/configureStore";

const Header = (props) => {

    // login 분기에 따라 header 설정
    const [isLogin,setIsLogin] = useState(false)

    // signIn
    const [inModal, setInModal] = useState(false);

    const [inId, setInId] = useState('')
    const [inPwd, setInPwd] = useState('')

    const signInModal = () => {
        setInModal(true)
        setUpModal(false)
    }

    const signIn = () => {
        //이후 로그인 API 연결
        if(inId==='' || inPwd ==='') {
            alert('회원정보를 입력해주세요')
            return
        }
        setIsLogin(true)
        setInModal(false)
        console.log('로그인',inId,inPwd)
    }

    const exit = () => {
        setInModal(false)
        setUpModal(false)
    }

    // signUP
    const [upModal, setUpModal] = useState(false);

    const [id, setId] = useState('')
    const [pwd, setPwd] = useState('')
    const [pwdCheck, setPwdCheck] = useState('')
    const [userName, setUserName] = useState('')

    const signUpModal = () => {
        setUpModal(true)
        setInModal(false)
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


    const signUp = () => {
        // 회원가입 API 연결
        if(id==='' || pwd ==='' || pwdCheck==='' || userName==='') {
            alert('회원정보를 입력해주세요')
            return
        }
        setInModal(true)
        setUpModal(false)
        console.log(id,pwd,userName,pwdCheck)
    }

    // SignOut
    const signOut = () => {
        setIsLogin(false)
        setNav(false)
        console.log('로그아웃')
    }

    // addPost
    const addPost = () => {
        // 이후 포스트 추가 페이지로 연결
        setNav(false)
        history.push('/addpost')
        console.log('포스트 추가')
    }

    // NavBar 설정
    const [nav,setNav] = useState(false)
    const nva = () => {
        if(nav) {
            setNav(false)
        } else {
            setNav(true)
        }
    }

    const home = () => {
        history.push('/')
    }

    if(props.location.pathname === '/addpost') {
        return null
    }

    return(
        <HeaderStyle>
            <Grid is_flex height='64px'>
                <Grid width='auto'>
                    <h1 onClick={home} style={{cursor:'pointer'}}>velgo</h1>
                </Grid>
                <Grid position='relative' is_flex width='auto'>
                    <Grid width='auto' height='36px' padding='8px' cursor='pointer' hoverBg='#eee' borderRadius='50%'>
                        <IconButton margin='0 0 0 auto' IconButton size='20px' search></IconButton>
                    </Grid>
                    {!isLogin
                    ?<Button margin='0 0 0 10px' _onClick={signInModal} hoverBg='#555' hoverColor='#fff' cursor='pointer' borderRadius='30px' border='1px solid #555' padding='5px 16px' bg='#fff' color='#555' size='0.8rem' bold>로그인</Button>
                    :null}
                    {isLogin
                    ?<Grid is_flex margin='0 0 0 10px'>
                        <Button _onClick={addPost} hoverBg='#555' hoverColor='#fff' cursor='pointer' borderRadius='30px' border='1px solid #555' padding='5px 16px' bg='#fff' color='#555' size='0.8rem' bold>새 글 작성</Button>
                        <Grid _onClick={nva} cursor='pointer' width='auto' margin='0 0 0 10px' is_flex>
                            <img alt ="" src="https://reacteek-1.s3.ap-northeast-2.amazonaws.com/ch-1.png" style={{width:'2.5rem',height:'2.5rem',borderRadius:'50%'}}></img>
                            <IconButton margin='0 0 0 5px' color='#777' size='12px' Down></IconButton>
                        </Grid>
                    </Grid>
                    :null}
                    {nav
                    ?<NavBar>
                        <Grid width='200px' bg='#fff' padding='14px 14px' cursor='pointer' hoverBg='rgb(248, 249, 250)'>내 글 보기</Grid>
                        <Grid width='200px' bg='#fff' padding='14px 14px' cursor='pointer' hoverBg='rgb(248, 249, 250)'>좋아요</Grid>
                        <Grid _onClick={signOut} width='200px' bg='#fff' padding='14px 14px' cursor='pointer' hoverBg='rgb(248, 249, 250)'>로그아웃</Grid>
                    </NavBar>
                    :null}
                </Grid>
            </Grid>
            {inModal ? 
                <SignIn>
                <ModalInner>
                    <Grid padding='20px' width='30%' bg='#eee'>
                        <Text margin="0 0 20px 0" size="1.2rem" bold>welcome</Text>
                        <Text margin="0 0 20px 0" size="1.2rem" bold>to</Text>
                        <Text margin="0 0 20px 0" size="1.2rem" bold>velog !!</Text>
                    </Grid>
                    <Grid padding='20px 30px'  width='70%'>
                        <Text margin='10px 0' size='22px' bold>로그인</Text>
                        <Text margin='10px 0' size='14px'>어서오세요 반갑습니다!</Text>
                        <Input _onChange={(e)=>{setInId(e.target.value)}} margin='10px 0' width='100%' padding="15px" placeholder='아이디를 입력해주세요'></Input>
                        <Input _onChange={(e)=>{setInPwd(e.target.value)}} type='password' margin='10px 0' width='100%' padding="15px" placeholder='패스워드를 입력해주세요'></Input>
                        <Button margin='10px 0' _onClick={signIn} width='100%' cursor='pointer' borderRadius='3px' border='1px solid rgb(18, 184, 134)' padding='10px 20px' bg='rgb(18, 184, 134)' color='#fff' size='16px' bold>로그인</Button>
                        <Grid margin='10px 0' is_flex>
                            <Text size='0.9rem' bold margin='0 10px 0 auto' color='#777'>회원이 아니신가요?</Text>
                            <Button _onClick={signUpModal} cursor='pointer' padding='5p 20px' bg='#fff' color='rgb(18, 184, 134)' size='1rem' bold >회원가입</Button>
                        </Grid>
                    </Grid>
                    <Grid width='auto' position='absolute' top='5px' right='10px' _onClick={exit} cursor='pointer' padding='5px' color='#555' size='18px' bold>X</Grid>
                </ModalInner>
                </SignIn>
                : null}
                {upModal ? 
                <SignUp>
                <ModalInner>
                    <Grid padding='20px' width='30%' bg='#eee'>
                        <Text margin="0 0 20px 0" size="1.2rem" bold>welcome</Text>
                        <Text margin="0 0 20px 0" size="1.2rem" bold>to</Text>
                        <Text margin="0 0 20px 0" size="1.2rem" bold>velog !!</Text>
                    </Grid>
                    <Grid padding='20px 30px'  width='70%'>
                        <Text margin='10px 0' size='22px' bold>회원가입</Text>
                        <Text margin='10px 0' size='14px'>어서오세요 반갑습니다!</Text>
                        <Grid position='relative'>
                            <Input  _onChange={(e)=>{setId(e.target.value)}} margin='10px 0' width='100%' padding="15px" placeholder='이메일 형식으로 입력해주세요'></Input>
                            <Grid width='auto' position='absolute' top='20px' right='10px'>
                                <Button _onClick={idDuplicate} cursor='pointer' padding='5p 20px' bg='#fff' color='rgb(18, 184, 134)' size='0.75rem' bold >Check</Button>
                            </Grid>
                        </Grid>
                        {id===''?null:<Text margin='-11px 0 0 0' size='0.55rem' color={emailCheck(id)?'rgb(18, 184, 134)':'red'}>{emailCheck(id)?'알맞은 이메일 형식입니다':'잘못된 이메일 형식입니다'}</Text>}
                        <Grid position='relative'> 
                            <Input _onChange={(e)=>{setUserName(e.target.value)}} margin='10px 0' width='100%' padding="15px" placeholder='닉네임을 입력해주세요'></Input>
                            <Grid width='auto' position='absolute' top='20px' right='10px'>
                                <Button _onClick={nickNameDuplicate} cursor='pointer' padding='5p 20px' bg='#fff' color='rgb(18, 184, 134)' size='0.75rem' bold >Check</Button>
                            </Grid>
                        </Grid>
                        <Input _onChange={(e)=>{setPwd(e.target.value)}} type='password' margin='10px 0' width='100%' padding="15px" placeholder='6 ~ 10자 영문, 숫자 조합'></Input>
                        {pwd===''?null:<Text margin='-11px 0 0 0' size='0.55rem' color={checkPassword(pwd)?'rgb(18, 184, 134)':'red'}>{checkPassword(pwd)?'알맞은 비밀번호입니다':'잘못된 비밀번호입니다'}</Text>}
                        <Input _onChange={(e)=>{setPwdCheck(e.target.value)}} type='password' margin='10px 0' width='100%' padding="15px" placeholder='패스워드를 다시 입력해주세요'></Input>
                        {pwdCheck===''?null:<Text margin='-11px 0 0 0' size='0.55rem' color={pwd===pwdCheck?'rgb(18, 184, 134)':'red'}>{pwd===pwdCheck?'비밀번호가 같습니다':'비밀번호가 다릅니다'}</Text>}
                        <Button margin='10px 0' _onClick={signUp} width='100%' cursor='pointer' borderRadius='3px' border='1px solid rgb(18, 184, 134)' padding='10px 20px' bg='rgb(18, 184, 134)' color='#fff' size='16px' bold>회원가입</Button>
                        <Grid margin='10px 0' is_flex>
                            <Text size='0.9rem' bold margin='0 10px 0 auto' color='#777'>계정이 있으신가요?</Text>
                            <Button _onClick={signInModal} cursor='pointer' padding='5p 20px' bg='#fff' color='rgb(18, 184, 134)' size='1rem' bold >로그인</Button>
                        </Grid>
                    </Grid>
                    <Grid width='auto' position='absolute' top='5px' right='10px' _onClick={exit} cursor='pointer' padding='5px' color='#555' size='18px' bold>X</Grid>
                </ModalInner>
                </SignUp>
                : null}
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
    width: 100%;
    max-width: 1730px;
    margin:0 auto;
    box-sizing:border-box;
    h1{
        margin:0;
        font-weight:500;
        font-size:26px;
        color:#777
    }
    @media only screen and (max-width: 1730px) {
        padding :0 20px
    }

`
const NavBar = styled.nav`
    position:absolute;
    width: auto;
    top:48px;
    right:0;
    z-index:10;
    box-shadow:0px 0px 1px 2px #eee;
`

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

const SignUp = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
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
  @media only screen and (max-width:  480px) {
    width: 100%;
    margin-top:0;
    height:100%
    }
`
export default withRouter(Header)