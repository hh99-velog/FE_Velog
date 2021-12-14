import React from 'react';
import styled from "styled-components"

const Button = (props) => {
    const {borderRadius,width,height,text, margin,children, _onClick, bg, color, border,padding,size,bold,cursor,hoverColor,hoverBg} = props
    const styles = {borderRadius,width,height,text, margin, bg, color, border,padding:padding,size:size,bold:bold,cursor:cursor,hoverColor,hoverBg}
    return(
        <>
        <BtnBox  
        {...styles}
        onClick = {_onClick}>
        {text?text:children}</BtnBox>
        </>

    )
}

Button.defaultProps = {
    _onClick :() => {},
    margin: false,
    text: false,
    children: null,
    width: null,
    height: "",
    bg : "#444444",
    color: "#FFFFFF",
    border: false,
    borderRadius: false,
    padding:0,
    size:0,
    bold:null,
    cursor:null,
    hoverColor:null,
    hoverBg:null
}

const BtnBox = styled.button`
font-weight: ${(props) => (props.bold ? "700" : "200")};
box-sizing:border-box;
font-size:${(props) => props.size};
padding:${(props) => props.padding};
width: ${(props) => props.width};
${(props) =>(props.margin ?`margin:${props.margin};`:"")}
${(props) =>(props.width?`width:${props.width};`:"") }
${(props) =>(props.height?`height:${props.height};`:"") }
${(props) =>(props.border?`border : ${props.border};`:`border : none;`) }
background-color: ${(props) => props.bg};
color: ${(props) => props.color};
${(props) =>(props.borderRadius?`border-radius:${props.borderRadius};`:"") }
cursor: ${(props) => props.cursor};
transition: all 0.2s;
&:hover{
    color:${(props) => props.hoverColor};
    background-color:${(props) => props.hoverBg};
    transition: all 0.2s;
}
`

export default Button