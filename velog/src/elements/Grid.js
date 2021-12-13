import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  // props
  const {
    _onClick, // 클릭 이벤트입니다
    is_flex, // is_flex => display:flex; align-items:center
    width,
    padding,
    margin,
    bg, // bg => background : bg
    border,
    borderBottom,
    height,
    hide,
    borderRadius,
    children, // Grid로 감싼 자식요소
    cursor, // cursor='pointer'
    position,
    bottom,
    left,
    hoverBg,
    hoverColor,
    opacity,
    right,
    top
  } = props;

  // props style
  const styles = {
    bottom:bottom,
    left:left,
    hide: hide,
    is_flex: is_flex,
    width: width,
    height: height,
    margin: margin,
    padding: padding,
    bg: bg,
    border: border,
    borderBottom: borderBottom,
    borderRadius: borderRadius,
    cursor: cursor,
    position:position,
    hoverBg:hoverBg,
    hoverColor:hoverColor,
    opacity:opacity,
    right:right,
    top:top
  };

  return (
      <GridBox {...styles} onClick={_onClick}>
        {children}
      </GridBox>
  );
};

// Grid DefaultProps
Grid.defaultProps = {
  _onClick: () => {},
  children: null,
  is_flex: false,
  width: "100%",
  padding: 0,
  margin: 0,
  bg: null,
  height: "auto",
  borderRadius: "0px",
  cursor: "Default",
  position:null,
  bottom:null,
  left:null,
  right:null,
  top:null,
  hoverColor:null,
  hoverBg:null,
  opacity:1
};

// Gird 스타일드 컴포넌트
const GridBox = styled.div`
  box-sizing: border-box;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  cursor: ${(props) => props.cursor};
  position: ${(props) => props.position};
  bottom:${(props) => props.bottom};
  left:${(props) => props.left};
  right:${(props) => props.right};
  top:${(props) => props.top};
  ${(props) => (props.padding ? `padding : ${props.padding}` : "")};
  ${(props) => (props.margin ? `margin : ${props.margin}` : "")};
  ${(props) => (props.bg ? `background : ${props.bg}` : "")};
  ${(props) => (props.is_flex? "display:flex; align-items:center;  justify-content: space-between;" : "")};
  ${(props) => (props.border ? `border : ${props.border}` : "")};
  ${(props) => (props.borderBottom ? `border-bottom : ${props.borderBottom}` : "")};
  ${(props) => (props.hide ? `display:none` : "")};
  transition: all 0.2s;
  opacity:${(props) => props.opacity};
  &:hover{
    color:${(props) => props.hoverColor};
    background-color:${(props) => props.hoverBg};
    transition: all 0.2s;
  }
`;
export default Grid;
