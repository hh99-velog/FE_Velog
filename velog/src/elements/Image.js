import React from 'react'
import styled from "styled-components"

const Image = (props) => {

    const {src} = props

    const styles = {
        src : src,
    }

    return(
        <React.Fragment>
            <ImgBox {...styles}/>
        </React.Fragment>
    )
}

Image.defaultProps = {
    src: "https://newsimg.hankookilbo.com/cms/articlerelease/2021/06/05/ef519975-80c8-40b6-b25a-47ab6270dc60.png",
}

const ImgBox= styled.div`
    width: 100%;
    position: relative; // 상대적인 포지션
    padding-top: 60%; // 75%를 주는 이유는 넓이가 100%이기 때문에 4:3비율을 맟추기 위해
    background-image : url("${(props) => props.src}");
    background-size: cover;
    border-radius: 5px 5px 0 0;
`

export default Image
