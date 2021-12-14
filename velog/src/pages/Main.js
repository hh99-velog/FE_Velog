import React from 'react'
import styled from "styled-components"
import { history } from '../redux/configureStore'

import Grid from "../elements/Grid"
import Post from "../components/Post"


const Main = (props) => {
    return (
        <Grid  plex = "plex" padding= "20px 0px 0px 0px" margin = "-1rem">   
        <MainStyle>
        <Post/>
        </MainStyle>
        </Grid>   
    )
}
const MainStyle = styled.div`
    display: flex;
    width: 100%;
    max-width: 1730px;
    margin:0 auto;
    flex-wrap:wrap;
    flex-direction:row;
    box-sizing:border-box;
    @media only screen and (max-width: 1730px) {
    padding :0 20px
  }`

export default Main