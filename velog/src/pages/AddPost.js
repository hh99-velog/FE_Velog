import React,{useState,useRef} from "react";
import styled from "styled-components";
import { useSelector,useDispatch } from "react-redux";
import Swal from 'sweetalert2'

// 컴포넌트
import MarkdownRender from "../components/Makrdown";

// JS
import { history } from "../redux/configureStore";
import { actionCreators as imageActions } from "../redux/modules/preview"
import { actionCreators as postActions } from "../redux/modules/main"

//컴포넌트
import {Grid,Button} from "../elements/ElementIndex";

const AddPost = (props) => {
    const dispatch = useDispatch()

    // 이미지 파일 url따기
    const filesInput = useRef()
    
    // 전송용 데이터 관리
    const [input, setInput] = useState({ title: '', content: '' });
    const [imageFile, setImageFile] = useState(null);

    // 이미지 프리뷰 저장
    const selectFile = (e) => {
        const reader = new FileReader();
        const file = filesInput.current.files[0];
        reader.readAsDataURL(file);
        reader.onloadend = () =>{
            dispatch(imageActions.setPreview(reader.result))
        }
        
        // AddPost용 img 저장
        if(file) {
            setImageFile(file)
        }
    }

    // 프리뷰 img src 가져오기
    const preview = useSelector(state => state.preview.preview)

    // state input 분해구조할당
    const { title, content } = input;

    // title, contents 작성시 반영하여 실시간으로 input에 데이터 담음
    const textChange = (e) => {
        const { value, name } = e.target;
        
        setInput({
            ...input,
            [name]: value,
          });
    }

    // Add Post Api 요청
    const addPost = async () => {
        if(title ==='' || content === '') {
            Swal.fire({
                text: '텍스트를 입력해주세요',
                color: '#777',
                confirmButtonColor: '#ff7777'
              })
            return
        }
        if(imageFile == null) {
            Swal.fire({
                text: '이미지를 등록해주세요',
                color: '#777',
                confirmButtonColor: '#ff7777'
              })
            return
        }

        // 새로운 폼데이터 생성
        let addFormData = new FormData();
        // 이미지와 함께 보낼 콘텐츠와 타이틀
        const data = {
            title: title,
            content: content,
        };

        // 폼데이터에 이미지와 콘텐츠 추가
        addFormData.append("multipartFile", imageFile);
        addFormData.append(
            "data",
            new Blob([JSON.stringify(data)], { type: "application/json" })
        );

        // AddPost 요청
        await dispatch(postActions.addPostDB(addFormData))
    }

    // 나가기 버튼
    const exit = () => {
        history.push('/')
        dispatch(imageActions.setPreview(''))
    }

    return(
        <AddPostStyle>
            <div className="add">
                <input 
                    name='title' 
                    value={title} 
                    onChange={textChange} 
                    style={{outline:'none'}} 
                    placeholder="제목을 적어주세요..." 
                    className="title"
                ></input>
                <input 
                    ref={filesInput} 
                    onChange={selectFile} 
                    className="file" 
                    type="file"
                ></input>
                <textarea 
                    name='content' 
                    value={content}
                    style={{outline:'none'}} 
                    placeholder="텍스트를 입력해주세요..." 
                    className="text" 
                    onChange={textChange}
                ></textarea>
                <Grid width='100%' height='95px' is_flex>
                    <Button 
                        _onClick={exit} 
                        hoverBg='#eee' 
                        border='none' 
                        color='#777' 
                        bg='#fff' 
                        cursor='pointer' 
                        margin='0 10px' 
                        width='20%' 
                        padding='8px 0' 
                        size='16px'
                    ><b>나가기</b>
                    </Button>
                    <Button 
                        _onClick={addPost}
                        border='none' 
                        color='#fff' 
                        borderRadius='3px' 
                        hoverBg='rgb(27, 231, 170)' 
                        bg='rgb(18, 184, 134)' 
                        cursor='pointer' 
                        margin='0 10px'
                        width='20%' 
                        padding='8px 0' 
                        size='16px'
                    ><b>출간하기</b></Button>
                </Grid>
            </div>
            <div className="preview">
                <h2>{title}</h2>
                {/* 프리뷰가 있다면 이미지를 보여주고 없다면 null */}
                {preview?<img alt="예시이미지" src={preview?preview:null}></img>:null}
                <MarkdownRender>{content}</MarkdownRender>
            </div>
        </AddPostStyle>
    )
}

// AddPostStyle component
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