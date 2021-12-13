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
    transition, // 추가
    overFlow, // 추가
    flex, // 추가
    flexDirection, //추가
    borderTop,//추가
  } = props;

  // props style
  const styles = {
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
    transition:transition, //추가
    overFlow:overFlow, // 추가
    flex:flex, // 추가
    flexDirection:flexDirection, //추가
    borderTop : borderTop, // 추가

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
  transition:false, //추가
  overFlow:false, // 추가
  flex:false, //추가
  flexDirection: false, //추가
  borderTop:false // 추가

  
};

// Gird 스타일드 컴포넌트
const GridBox = styled.div`
  box-sizing: border-box;
  ${(props) => (props.width ? `width : ${props.width}` : "")}; // 수정
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  cursor: ${(props) => props.cursor};
  ${(props) => (props.padding ? `padding : ${props.padding}` : "")};
  ${(props) => (props.margin ? `margin : ${props.margin}` : "")};
  ${(props) => (props.bg ? `background : ${props.bg}` : "")};
  ${(props) => (props.is_flex? "display:flex; align-items:center;  justify-content: space-between;" : "")};
  ${(props) => (props.border ? `border : ${props.border}` : "")};
  ${(props) => (props.borderBottom ? `border-bottom : ${props.borderBottom}` : "")};
  ${(props) => (props.hide ? `display:none` : "")};
  ${(props) => (props.flexWrap ? `flex-wrap : ${props.flexWrap}` : "")}; //추가
  ${(props) => (props.boxShadow ? `box-shadow : ${props.boxShadow}` : "")}; //추가
  ${(props) => (props.transition? `transition : ${props.transition}` : "")}; //추가 
  ${(props) => (props.overFlow? ` overflow: ${props.overflow}` : "")}; //추가  // 내용 넘칠때 어떻게 할지 정하는 css
  ${(props) => (props.flex? `display:flex:${props.flex}` : "")} // 추가
  ${(props) => (props.flexDirection? `flex-direction:${props.flexDirection}` : "")} //추가
  ${(props) => (props.borderTop? `border-top:${props.borderTop}` : "")} //추가

`;
export default Grid;
