import React from "react";
import styled   from "styled-components";

const Input = (props) => {

    const {
        type,
        value, 
        placeholder,
        _onChange,
        //css
        width,
        margin,
        padding,
        border,
        size
    } = props; 
    
    const styles = {
        width: width,
        margin:margin,
        padding:padding,
        border:border,
        size:size
    };
    
    return(
        <InputStyle 
            {...styles}
            type={type} 
            value={value} 
            placeholder={placeholder} 
            onChange={_onChange}
        ></InputStyle> 
    );
};

Input.defaultProps = {
    type: "text",
    value: undefined,
    placeholder: "텍스트를 입력해주세요.",
    _onChange : () => {},
    width : null,
    margin:null,
    padding:null,
    border: '1px solid #777',
    size:'16px'
}

const InputStyle = styled.input`
  box-sizing: border-box;
  padding: ${(props)=>props.padding};
  width: ${(props)=>props.width};
  margin: ${(props)=>props.margin};
  border: ${(props)=>props.border};
  font-size: ${(props)=>props.size};
`;

export default Input