import React from "react";
import styled from "styled-components";

const Text = (props) => {
  // props
  const {
    bold, // 있으면 700 없으면 200
    color, // 기본값 #333
    size, // 기본값 18px
    margin,
    cursor,
    _onClick,
  } = props;

  // props style
  const styles = {
    bold: bold,
    color: color,
    size: size,
    margin: margin,
    cursor:cursor,
  };

  return (
      <TextStyle {...styles} onClick={_onClick}>
        {props.children}
      </TextStyle>
  );
};

// Text DefaultProps
Text.defaultProps = {
  _onClick: () => {},
  bold: null,
  color: "#333",
  size: "18px",
  margin: '0',
};

// Text 스타일드 컴포넌트
const TextStyle = styled.p`
  font-weight: ${(props) => (props.bold ? "700" : "200")};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  margin: ${(props) => props.margin};
  cursor: ${(props) => props.cursor};
  word-break: break-all;
`;

export default Text;
