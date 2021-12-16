import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  // props
  const {
    children,
    _onClick, // 클릭 이벤트입니다
    is_flex, // is_flex => display:flex; align-items:center
    width,
    padding,
    margin,
    bg, // bg => background : bg
    height,
    border,
    borderRadius,
    cursor, // cursor='pointer'
    opacity,
    position
  } = props;

  // props style
  const styles = {
    is_flex:is_flex, // is_flex => display:flex; align-items:center
    width:width,
    padding:padding,
    margin:margin,
    bg:bg, // bg => background : bg
    height:height,
    border:border,
    borderRadius:borderRadius,
    cursor:cursor, // cursor='pointer'
    opacity:opacity,
    position:position
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
  is_flex: false,
  width: "100%", 
  padding: 0,
  margin: 0,
  bg: null,
  height: "auto",
  border: null,
  borderRadius: "0px",
  cursor: "Default",
  opacity:1,
};

// Gird 스타일드 컴포넌트
const GridBox = styled.div`
  box-sizing: border-box;
  ${(props) => (props.is_flex? "display:flex; align-items:center;  justify-content: space-between;" : "")}; 
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bg};
  height: ${(props) => props.height};
  border:${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  cursor: ${(props) => props.cursor};
  opacity:${(props) => props.opacity};
  position:${(props) => props.position};
`

export default Grid;
