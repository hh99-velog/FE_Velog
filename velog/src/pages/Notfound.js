import React from "react";
import styled from "styled-components";
import { Grid, Text, Button } from "../elements/ElementIndex";
import { history } from '../redux/configureStore';

const NotFound = (props) => {    

    const goBack = () => {
        history.replace('/')
    }

    return (
        <React.Fragment>
            <Grid width='80%' margin='100px auto'>
                <Text size='2.5rem' bold>404</Text>
                <Text size='2.5rem' bold>Not Found</Text>
                <Btn onClick={goBack}>돌아가기</Btn>
            </Grid>
        </React.Fragment>
    )
}

const Btn = styled.button`
    width: 300px;
    padding:10px 20px;
    margin-top:20px;
    background: rgb(18, 184, 134);
    color:#fff;
    font-weight:bold;
    border:none
`

export default NotFound