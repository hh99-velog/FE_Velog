import React,{useEffect, useState} from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

// JS파일
import { actionCreators as userActions} from '../redux/modules/user'

const Nav = (props) => {

    const dispatch = useDispatch()
    const navState = props.nav
    
    // NavBar 설정
    const [nav,setNav] = useState(false)
    
    useEffect(() => {
        setNav(navState)
    },[navState])
    
    // SignOut
    const signOut = () => {
        dispatch(userActions.logoutDB())
        setNav(false)
    }

    return(
        <React.Fragment>
            {nav
            ?<NavBar>
                <NavList>내 글 보기</NavList>
                <NavList>좋아요</NavList>
                <NavList onClick={signOut}>로그아웃</NavList>
            </NavBar>
            :null
            }
        </React.Fragment>
    )
}

const NavBar = styled.nav`
    position:absolute;
    width: auto;
    top: 50px;
    right:0;
    z-index:10;
    box-shadow:0px 0px 1px 2px #eee;
`
const NavList = styled.div`
    width:150px;
    background: #fff;
    padding:14px;
    cursor:pointer;
    &:hover {
        background-color:rgb(248, 249, 250);
    };
`
export default Nav