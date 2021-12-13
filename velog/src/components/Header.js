import React,{useState} from "react";
import styled from "styled-components";
import {Grid,IconButton,Button,Text,Input} from "../elements/ElementIndex";

const Header = (props) => {
 

    // login 분기에 따라 header 설정
    const [isIogin,setIsIogin] = useState(false)

    // signIn
    const [inModal, setInModal] = useState(false);
    const signInModal = () => {
        setInModal(true)
        setUpModal(false)
    }

    const signIn = () => {
        //이후 로그인 API 연결
        console.log('로그인')
        setIsIogin(true)
        setInModal(false)
    }

    const exit = () => {
        setInModal(false)
        setUpModal(false)
    }

    // signUP
    const [upModal, setUpModal] = useState(false);
    const signUpModal = () => {
        setUpModal(true)
        setInModal(false)
    }
    const signUp = () => {
        // 회원가입 API 연결
        setInModal(true)
        setUpModal(false)
    }

    // SignOut
    const signOut = () => {
        setIsIogin(false)
        setNav(false)
        console.log('로그아웃')
    }

    // addPost
    const addPost = () => {
        // 이후 포스트 추가 API 연결
        console.log('addpost')
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

    // 트렌드 최신 버튼 애니메이션 구현
    const [left,setLeft] = useState(0)
    const [trendOp,setTrendOp] = useState(1)
    const [recentOp,setRecentOp] = useState(0.5)

    const trend = () => {
        setLeft('0')
        setTrendOp(1)
        setRecentOp(0.5)
    }
    const recent = () => {
        setLeft('114px')
        setTrendOp(0.5)
        setRecentOp(1)
    }
    
    if(!isIogin) {
        return(
            <HeaderStyle>
                <Grid is_flex height='64px'>
                    <Grid width='auto' margin='0 auto 0 0'>
                        <h1 style={{cursor:'pointer'}}>velgo</h1>
                    </Grid>
                    <Grid position='relative' is_flex width='auto'>
                        <Grid width='40px' padding='8px' cursor='pointer' hoverBg='#eee' margin='0 10px 0 0' borderRadius='50%'>
                            <IconButton  IconButton size='20px' search></IconButton>
                        </Grid>
                        <Button _onClick={signInModal} hoverBg='#555' hoverColor='#fff' cursor='pointer' borderRadius='30px' border='1px solid #555' padding='5px 20px' bg='#fff' color='#555' size='16px' bold>로그인</Button>
                    </Grid>
                </Grid>
                <Grid is_flex height='64px' margin='1.5rem 0 0 0' position='relative'>
                    <Grid _onClick={trend} opacity={trendOp} padding='10px' cursor='pointer' width='auto' is_flex>
                        <IconButton height='22px' size='22px'></IconButton>
                        <Text bold margin='0 0 0 10px'>트렌딩</Text>
                    </Grid>
                    <Grid _onClick={recent} opacity={recentOp} padding='10px' cursor='pointer' width='auto' is_flex margin='0 auto 0 15px'>
                        <IconButton height='22px' clock size='22px'></IconButton>
                        <Text bold margin='0 0 0 10px'>최신</Text>
                    </Grid>
                    <Grid width='114px' bottom='10px' left={left} position='absolute' borderBottom='2px solid #000'></Grid>
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
                            <Input margin='10px 0' width='100%' padding="15px" placeholder='아이디를 입력해주세요'></Input>
                            <Input type='password' margin='10px 0' width='100%' padding="15px" placeholder='패스워드를 입력해주세요'></Input>
                            <Button margin='10px 0' _onClick={signIn} width='100%' cursor='pointer' borderRadius='3px' border='1px solid rgb(18, 184, 134)' padding='10px 20px' bg='rgb(18, 184, 134)' color='#fff' size='16px' bold>로그인</Button>
                            <Grid margin='10px 0' is_flex>
                                <Text size='0.9rem' bold margin='0 10px 0 auto'>회원이 아니신가요?</Text>
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
                                <Input margin='10px 0' width='100%' padding="15px" placeholder='아이디를 입력해주세요'></Input>
                            </Grid>
                            <Grid position='relative'> 
                                <Input margin='10px 0' width='100%' padding="15px" placeholder='닉네임을 입력해주세요'></Input>
                            </Grid>
                            <Input type='password' margin='10px 0' width='100%' padding="15px" placeholder='패스워드를 입력해주세요'></Input>
                            <Input type='password' margin='10px 0' width='100%' padding="15px" placeholder='패스워드를 다시 입력해주세요'></Input>
                            <Button margin='10px 0' _onClick={signUp} width='100%' cursor='pointer' borderRadius='3px' border='1px solid rgb(18, 184, 134)' padding='10px 20px' bg='rgb(18, 184, 134)' color='#fff' size='16px' bold>회원가입</Button>
                            <Grid margin='10px 0' is_flex>
                                <Text size='0.9rem' bold margin='0 10px 0 auto'>계정이 있으신가요?</Text>
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

    return(
        <HeaderStyle>
            <Grid is_flex height='64px'>
                <Grid width='auto' margin='0 auto 0 0'>
                    <h1 style={{cursor:'pointer'}}>velgo</h1>
                </Grid>
                <Grid position='relative' is_flex width='auto'>
                    <Grid width='40px' height='40px' padding='8px' cursor='pointer' hoverBg='#eee' margin='0 10px 0 0' borderRadius='50%'>
                        <IconButton IconButton size='20px' search></IconButton>
                    </Grid>
                    <Button _onClick={addPost} hoverBg='#555' hoverColor='#fff' cursor='pointer' borderRadius='30px' border='1px solid #555' padding='5px 20px' bg='#fff' color='#555' size='16px' bold>새 글 작성</Button>
                    <Grid _onClick={nva} cursor='pointer' width='auto' margin='0 0 0 20px' is_flex>
                        <img src="https://reacteek-1.s3.ap-northeast-2.amazonaws.com/ch-1.png" style={{width:'2.5rem',height:'2.5rem',borderRadius:'50%'}}></img>
                        <IconButton margin='0 0 0 5px' color='#777' size='12px' Down></IconButton>
                    </Grid>
                    {nav
                    ?<NavBar>
                        <Grid width='200px' bg='#fff' padding='8px 10px' cursor='pointer' hoverBg='rgb(248, 249, 250)'>내 글 보기</Grid>
                        <Grid width='200px' bg='#fff' padding='8px 10px' cursor='pointer' hoverBg='rgb(248, 249, 250)'>좋아요</Grid>
                        <Grid _onClick={signOut} width='200px' bg='#fff' padding='14px 10px' cursor='pointer' hoverBg='rgb(248, 249, 250)'>로그아웃</Grid>
                    </NavBar>
                    :null}
                </Grid>
            </Grid>
            <Grid is_flex height='64px' margin='1.5rem 0 0 0' position='relative'>
                <Grid _onClick={trend} opacity={trendOp} padding='10px' cursor='pointer' width='auto' is_flex>
                    <IconButton height='22px' size='22px'></IconButton>
                    <Text bold margin='0 0 0 10px'>트렌딩</Text>
                </Grid>
                <Grid _onClick={recent} opacity={recentOp} padding='10px' cursor='pointer' width='auto' is_flex margin='0 auto 0 15px'>
                    <IconButton height='22px' clock size='22px'></IconButton>
                    <Text bold margin='0 0 0 10px'>최신</Text>
                </Grid>
                <Grid width='114px' bottom='10px' left={left} position='absolute' borderBottom='2px solid #000'></Grid>
            </Grid>
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
  height: 100%;
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
export default Header