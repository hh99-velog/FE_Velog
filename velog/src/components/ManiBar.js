import React,{useState} from "react";
import styled from "styled-components";
import { withRouter } from 'react-router-dom'

//컴포넌트
import {Grid,IconButton,Text} from "../elements/ElementIndex";

//JS파일
import { history } from "../redux/configureStore";

const ManiBar = (props) => {
 
    // 트렌드 최신 버튼 애니메이션 구현
    const [left,setLeft] = useState(0)
    const [trendOp,setTrendOp] = useState(1)
    const [recentOp,setRecentOp] = useState(0.5)

    const trend = () => {
        setLeft('0')
        setTrendOp(1)
        setRecentOp(0.5)
        history.push('/')

    }
    const recent = () => {
        setLeft('114px')
        setTrendOp(0.5)
        setRecentOp(1)
        history.push('/recent')
    }

    if(props.location.pathname === '/' || props.location.pathname === '/recent') {
        return(
            <HeaderStyle>
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

    return(
       <>
       </>
    )
}

const HeaderStyle = styled.header`
    width: 100%;
    max-width: 1730px;
    margin:0 auto;
    box-sizing:border-box;
    @media only screen and (max-width: 1730px) {
    padding :0 20px
    z-index:9;
  }
`

export default withRouter(ManiBar)