import React from "react";
import styled   from "styled-components";

const Input = (props) => {
    const {type, value, placeholder,_onChange, width, multiLine,padding,margin} =props; 
    
    const styles = {
        margin:margin,
        padding:padding,
        width: width,
    }

    if(multiLine){
        return (
            <Textarea rows={5} value={value} placeholder={placeholder} onChange={_onChange}></Textarea> 
        )
      }
    
    return(
            <InputSome type={type} value={value} placeholder={placeholder} onChange={_onChange} {...styles}></InputSome> 
    )
} 

Input.defaultProps = {
    type: "text",
    value: undefined,
    placeholder: "입력해주세요.",
    _onChange : () => {},
    width : null,
    margin:null
    
}

const Textarea = styled.textarea`
    border: 1px solid #212121;
    width: 100%;
    padding: 0;
    box-sizing: border-box;
`;

const InputSome = styled.input`
  border: 1px solid #212121;
  box-sizing: border-box;
  padding: ${(props)=>props.padding};
  width: ${(props)=>props.width};
  ${(props) => (props.margin ? `margin : ${props.margin}` : "")};

`;

export default Input