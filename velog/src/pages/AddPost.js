import React,{useState} from "react";
import styled from "styled-components";
import MarkdownRender from "../components/Makrdown";

import { history } from "../redux/configureStore";

//컴포넌트
import {Grid,Button,Image} from "../elements/ElementIndex";

const AddPost = (props) => {

    const preview = false
    const [text,setText] = useState()
    const [title,setTitle] = useState()

    const titleChange = (e) => {
        setTitle(e.target.value)
    }

    const textChange = (e) => {
        setText(e.target.value)
    }

    // 나가기 버튼
    const exit = () => {
        history.push('/')
    }

    return(
        <AddPostStyle>
            <div className="add">
                <input onChange={titleChange} style={{outline:'none'}} placeholder="제목을 적어주세요..." className="title"></input>
                <input className="file" type="file"></input>
                <textarea style={{outline:'none'}} placeholder="텍스트를 입력해주세요..." className="text" onChange={textChange}></textarea>
                <Grid width='100%' height='95px' is_flex>
                    <Button _onClick={exit} hoverBg='#eee' color='#777' bg='#fff' cursor='pointer' margin='0 10px' width='20%' padding='8px 0' size='16px'><b>나가기</b></Button>
                    <Button borderRadius='3px' hoverBg='rgb(27, 231, 170)' bg='rgb(18, 184, 134)' cursor='pointer' margin='0 10px' width='20%' padding='8px 0' size='16px'><b>출간하기</b></Button>
                </Grid>
            </div>
            <div className="preview">
                <h1>{title}</h1>
                <Image shape='rectangle' src={preview?preview:'https://via.placeholder.com/400x300'}></Image>
                <MarkdownRender>{text}</MarkdownRender>
            </div>
        </AddPostStyle>
    )
}

const AddPostStyle = styled.div`
    display:flex;
    position: relative;
    .title {
        box-sizing:border-box;
        width: 100%;
        padding: 30px 20px;
        font-size:40px;
        font-weight:bold;
        border:none;   
        &::placeholder {
        color: #aaa;}
        
    }  
    .add {
        width: 50%;
        height:100%;
        min-height:100vh;
        background: #fff;
        @media only screen and (max-width: 480px) {
            width: 100%;
        }  
    }
    .add .file {
        margin-left:20px
        width: 100%;
    }
    .add .text {
        box-sizing:border-box;
        width: 100%;
        border:none;
        padding:10px 20px;
        resize:none;
        height:calc(100vh - 230px);
        font-size:18px
    }
    .preview{
        box-sizing:border-box;
        font-size: 1.1rem;
        height: 100vh;
        max-height: 100%;
        overflow-y: auto;
        padding: 20px;
        flex-basis: 50%;
        width: 50%;
        @media only screen and (max-width: 480px) {
            display:none;
        }  
    }

`

export default AddPost;