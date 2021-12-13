import React from "react";
import styled from "styled-components";

const Text = (props) => {
  // props
  const {
    children, // 감싼 값
    bold, // 있으면 700 없으면 200
    color, // 기본값 #333
    bg, // 기본값 #fff
    size, // 기본값 18px
    margin,
    align,
    height,
    border,
    _onClick,
    cursor,
  } = props;

  // props style
  const styles = {
    cursor:cursor,
    border: border,
    bold: bold,
    color: color,
    size: size,
    bg: bg,
    margin: margin,
    height: height,
    align: align, // center,start,end
  };

  return (
      <TextStyle {...styles} onClick={_onClick}>
        {children}
      </TextStyle>
  );
};

// Text DefaultProps
Text.defaultProps = {
  children: null,
  _onClick: () => {},
  bold: false,
  color: "#333",
  bg: null,
  size: "18px",
  margin: 0,
  align: null,
  height: null,
};

// Text 스타일드 컴포넌트
const TextStyle = styled.p`
  font-weight: ${(props) => (props.bold ? "700" : "200")};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
  font-size: ${(props) => props.size};
  margin: ${(props) => props.margin};
  align-self: ${(props) => props.align};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.border};
  word-break: break-all;
  cursor: ${(props) => props.cursor};
`;

export default Text;
