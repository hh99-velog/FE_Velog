import React,{useState} from "react";
import styled from "styled-components";
import { withRouter } from 'react-router-dom'

//컴포넌트
import {Grid,Text} from "../elements/ElementIndex";

//JS파일
import { history } from "../redux/configureStore";

// react-icon 
import { AiOutlineClockCircle,AiOutlineRise } from "react-icons/ai";

const ManiBar = (props) => {
 
    // 트렌드 최신 버튼 애니메이션 구현
    const [left,setLeft] = useState(props.location.pathname === '/recent'? '114px':0)
    const [trendOp,setTrendOp] = useState(props.location.pathname === '/recent'? 0.5:1)
    const [recentOp,setRecentOp] = useState(props.location.pathname === '/recent'? 1:0.5)

    // 트렌드로 이동
    const trend = () => {
        setLeft('0')
        setTrendOp(1)
        setRecentOp(0.5)
        history.push('/')
    }

    // 최신으로 이동
    const recent = () => {
        setLeft('114px')
        setTrendOp(0.5)
        setRecentOp(1)
        history.push('/recent')
    }

    // 메인화면에서만 보이게 설정
    if(props.location.pathname === '/' || props.location.pathname === '/recent') {
        return(
            <HeaderStyle>
                <Grid is_flex height='64px' margin='1.5rem 0 0 0' position='relative'>
                    <Grid _onClick={trend} opacity={trendOp} padding='10px' cursor='pointer' width='auto' is_flex>
                        <AiOutlineRise height='22px' size='22px'></AiOutlineRise>
                        <Text bold margin='0 0 0 10px'>트렌딩</Text>
                    </Grid>
                    <Grid _onClick={recent} opacity={recentOp} padding='10px' cursor='pointer' width='auto' is_flex margin='0 auto 0 15px'>
                        <AiOutlineClockCircle height='22px' size='22px'></AiOutlineClockCircle>
                        <Text bold margin='0 0 0 10px'>최신</Text>
                    </Grid>
                    <UnderLine left={left}></UnderLine>
                </Grid>
            </HeaderStyle>
        )
    }

    return(
       <React.Fragment></React.Fragment>
    )
}

// HeaderStyle component
const HeaderStyle = styled.nav`
    width: 100%;
    max-width: 1730px;
    margin:0 auto;
    box-sizing:border-box;
    
    // 반응형 설정
    @media only screen and (max-width: 1730px) {
        padding :0 20px;
    }
`

// UnderLine component
const UnderLine = styled.div`
    width: 114px;
    left: ${(props) => props.left};;
    bottom:10px;
    position: absolute;
    transition: all 0.2s;
    border-bottom:2px solid #000;
`
export default withRouter(ManiBar)