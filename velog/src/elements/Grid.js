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
    flexWrap, // 추가
    boxShadow, // 추가
    overFlow, // 추가
    flex, // 추가
    flexDirection, //추가
    borderTop,//추가
    position,
    bottom,
    left,
    hoverBg,
    hoverColor,
    opacity,
    right,
    top,
    boxSizing, //추가
    alignItems, //추가
    flexNum, // 추가
    postEvent, //추가
    justifyContent //추가
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
    flexWrap:flexWrap, //추가
    boxShadow:boxShadow, // 추가 
    overFlow:overFlow, // 추가
    flex:flex, // 추가
    flexDirection:flexDirection, //추가
    borderTop : borderTop, // 추가
    position:position,
    hoverBg:hoverBg,
    hoverColor:hoverColor,
    opacity:opacity,
    right:right,
    top:top,
    boxSizing:boxSizing,//추가
    alignItems:alignItems,//추가
    flexNum:flexNum, //추가
    postEvent:postEvent, // 추가
    justifyContent //추가
    
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
  flexWrap: false, // 추가
  boxShadow:false, //추가
  overFlow:false, // 추가
  flex:false, //추가
  flexDirection: false, //추가
  borderTop:false, // 추가
  position:null,
  bottom:null,
  left:null,
  right:null,
  top:null,
  hoverColor:null,
  hoverBg:null,
  opacity:1,
  boxSizing:false,//추가
  alignItems:false, //추가
  flexNum:false,//추가
  postEvent:false, //추가
  justifyContent:false //추가

};

// Gird 스타일드 컴포넌트
const GridBox = styled.div`
  box-sizing: border-box;
  ${(props) => (props.width ? `width : ${props.width}` : "")}; // 수정
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  cursor: ${(props) => props.cursor};
  position: ${(props) => props.position};
  bottom:${(props) => props.bottom};
  left:${(props) => props.left};
  right:${(props) => props.right};
  top:${(props) => props.top};
  ${(props) => (props.padding ? `padding : ${props.padding};` : "")};
  ${(props) => (props.margin ? `margin : ${props.margin};` : "")};
  ${(props) => (props.bg ? `background : ${props.bg};` : "")};
  ${(props) => (props.is_flex? "display:flex; align-items:center;  justify-content: space-between;" : "")};
  ${(props) => (props.border ? `border : ${props.border};` : "")};
  ${(props) => (props.borderBottom ? `border-bottom : ${props.borderBottom};` : "")};
  ${(props) => (props.hide ? `display:none;` : "")};
  ${(props) => (props.flexWrap ? `flex-wrap : ${props.flexWrap};` : "")}; //추가
  ${(props) => (props.boxShadow ? `box-shadow : ${props.boxShadow};` : "")}; //추가
  ${(props) => (props.overFlow? ` overflow: ${props.overflow};` : "")}; //추가  // 내용 넘칠때 어떻게 할지 정하는 css
  ${(props) => (props.flex? `display:flex;` : "")} // 추가
  ${(props) => (props.flexDirection? `flex-direction:${props.flexDirection};` : "")} //추가
  ${(props) => (props.borderTop? `border-top:${props.borderTop};` : "")} //추가
  transition: all 0.2s;
  opacity:${(props) => props.opacity};
  &:hover{
    color:${(props) => props.hoverColor};
    background-color:${(props) => props.hoverBg};
    transition: all 0.2s;
  }
  ${(props) => (props.boxSizing? `box-sizing:${props.boxSizing};` : "")} //추가
  ${(props) => (props.alignItems? `align-items:${props.alignItems};` : "")} //추가
  ${(props) => (props.flexNum? `flex-grow:1; flex-shrink:1; flex-basis:0%;` : "")} //추가
  ${(props) => (props.postEvent? `&:hover{ transform: translateY(-8px); box-shadow: rgb(0 0 0 / 8%) 0px 12px 20px 0px; 
} transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;` : "")} //추가
 ${(props) => (props.justifyContent? `justify-content:${props.justifyContent};` : "")} //추가



`;
export default Grid;
