import React from 'react';
import styled from "styled-components"

const Button = (props) => {

    const {
        borderRadius,
        width,
        margin,
        _onClick,
        bg,
        color,
        border,
        padding,
        size,
        bold,
        hoverColor,
        hoverBg
    } = props;

    const styles = {
        borderRadius:borderRadius,
        width:width,
        margin:margin,
        bg:bg,
        color:color,
        border:border,
        padding:padding,
        size:size,
        bold:bold,
        hoverColor:hoverColor,
        hoverBg:hoverBg
    };
    
    return(
        <ButtonStyle {...styles} onClick={_onClick}>
            {props.children}
        </ButtonStyle>
    )
}

Button.defaultProps = {
    borderRadius:null,
    width:'100%',
    margin:null,
    bg:'#fff',
    color:'#777',
    border:'1px solid #777',
    padding:null,
    size:'16px',
    hoverColor:null,
    hoverBg:null,
    _onClick: () => {},
}

const ButtonStyle = styled.button`
    box-sizing:border-box;
    transition: all 0.2s;
    border-radius: ${(props) => props.borderRadius};
    width: ${(props) => props.width};
    margin: ${(props) => props.margin};
    background-color: ${(props) => props.bg};
    color: ${(props) => props.color};
    border: ${(props) => props.border};
    padding: ${(props) => props.padding};
    font-size:${(props) => props.size};
    font-weight: ${(props) => (props.bold ? "700" : "200")};
    cursor: pointer;
    // hover css
    &:hover{
        color:${(props) => props.hoverColor};
        background-color:${(props) => props.hoverBg};
        transition: all 0.2s;
    }
`

export default Button