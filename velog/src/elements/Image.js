import React from 'react'
import styled from "styled-components"

const Image = (props) => {
    const {src, size} = props

    const styles = { // style끼리 구분하는게 편해서
        src : src,
        size: size,
    }

        return(
            <>
              <InBox {...styles}/>  
            </>
        )
    }

Image.defaultProps = {
    shape : "rectangle",
    src: "https://newsimg.hankookilbo.com/cms/articlerelease/2021/06/05/ef519975-80c8-40b6-b25a-47ab6270dc60.png",
    size : 30,
}

const InBox= styled.div`
width:100%;
height:0%;
position: relative; // 상대적인 포지션
padding-top: 52.1921%; // 75%를 주는 이유는 넓이가 100%이기 때문에 4:3비율을 맟추기 위해
overflow: hidden; // 이 박스 영역을 벗어나면 숨겨버린다.
background-image : url("${(props) => props.src}");
background-size: cover ;
box-sizing: content-box;
object-fit: cover;
box-sizing: inherit;
border-radius:5px 5px 0px 0px;

`



export default Image
