import React from "react";
import styled from "styled-components";
import { AiOutlineClockCircle,AiOutlineRise,AiFillCaretDown } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

const ImageButton = (props) => {
  // props
  const {
    clock, // 딜리트 아이콘
    search, // 서치 아이콘
    Down, // 다운 아이콘
    color,
    _onClick,
    size,
    height,
    margin,
    cursor,
  } = props;

  // props style
  const styles = {
    color: color,
    height: height,
    margin: margin,
    cursor:cursor
  };

  if (props.clock) {
    return (
        <Icon {...styles}>
          <AiOutlineClockCircle
            size={size}
            onClick={_onClick}
          ></AiOutlineClockCircle>
        </Icon>
    );
  }
  
  if (props.Down) {
    return (
      <React.Fragment>
        <Icon {...styles}>
          <AiFillCaretDown
            size={size}
            onClick={_onClick}
          ></AiFillCaretDown>
        </Icon>
      </React.Fragment>
    );
  }

  if (props.search) {
    return (
      <React.Fragment>
        <Icon {...styles}>
          <FiSearch
            size={size}
            onClick={_onClick}
          ></FiSearch>
        </Icon>
      </React.Fragment>
    );
  }


  // default 오름차트 아이콘
  return (  
    <React.Fragment>
      <Icon {...styles}>
        <AiOutlineRise
          size={size}
          onClick={_onClick}
        ></AiOutlineRise>
      </Icon>
    </React.Fragment>
  );
};

// ImageButton DefaultProps
ImageButton.defaultProps = {
  color: '#333',
  size: "16px",
  height: "auto",
  margin: null,
  _onClick: () => {},
};

// ImageButton 스타일드 컴포넌트
const Icon = styled.div`
  display: inline-block;
  cursor: ${(props) => props.cursor};
  color : ${(props) => props.color};
  margin: ${(props) => props.margin};
  cursor: ${(props) => props.cursor};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
`;

export default ImageButton;
