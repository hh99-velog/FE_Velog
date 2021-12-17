import React,{useState,useRef,useEffect} from "react";
import styled from "styled-components";
import { useSelector,useDispatch } from "react-redux";
import Swal from 'sweetalert2'

//컴포넌트
import {Grid,Button} from "../elements/ElementIndex";
import MarkdownRender from "../components/Makrdown";

// JS
import { history } from "../redux/configureStore";
import { actionCreators as imageActions } from "../redux/modules/preview"

import { actionCreators as detailActions} from '../redux/modules/Detail'
import Swal from 'sweetalert2'
//컴포넌트
import {Grid,Button,Image} from "../elements/ElementIndex";


const EditPost = (props) => {
    const dispatch = useDispatch()
    
    // 상세페이지에서 board_id 추출
    const pathName = props.location.pathname
    const boardId = pathName.split('/')  
    
    // 디테일 페이지에서 해당 정보 가져오기
    const list = useSelector((state) => state.detail.list)
    const data = list ? {...list} :null
    
    // 디테일 페이지에서 각 정보 가져오기
    const titles = data.title
    const contents = data.content
    const imgs = data.img

    const getDetail = () => {
        dispatch(detailActions.getDetailDB(boardId[2]))
    }

    // 해당 board_id에 get요청후 data title,content에 set titles,contents,imgs 변할때마다 반환
    useEffect(() => {
        getDetail()
        setInput({ title: titles, content: contents })
    },[titles, contents, imgs])
    
    // 이미지 파일 url따기
    const filesInput = useRef()
    
    // 이미지 프리뷰
    const selectFile = (e) => {
        const reader = new FileReader();
        const file = filesInput.current.files[0];
        reader.readAsDataURL(file);
        reader.onloadend = () =>{
            dispatch(imageActions.setPreview(reader.result))
        }
        // edit post용 파일 저장
        if(file) {
            setImageFile(file)
        }
    }

    // 프리뷰 img값 가져오기
    const preview = useSelector(state => state.preview.preview)

    // 전송용 데이터 관리
    const [input, setInput] = useState({ title: '', content: '' });
    const [imageFile, setImageFile] = useState(null);

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

    // add post
    const editPost = () => {
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
                text: '사진을 수정해주세요',
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
        // Edit Post Api 요청
        dispatch(detailActions.editDetailDB(boardId[2],addFormData))
    }

    // 나가기 버튼
    const exit = () => {
        history.push('/')
        dispatch(imageActions.setPreview(''))
    }

    return(
        <AddPostStyle>
            <div className="add">
                <input name='title' value={title} onChange={textChange} style={{outline:'none'}} placeholder="제목을 적어주세요..." className="title"></input>
                <input ref={filesInput} onChange={selectFile} className="file" type="file"></input>
                <textarea name='content' value={content} style={{outline:'none'}} placeholder="텍스트를 입력해주세요..." className="text" onChange={textChange}></textarea>
                <Grid width='100%' height='95px' is_flex>
                    <Button _onClick={exit} hoverBg='#eee' color='#777' border='none' bg='#fff' cursor='pointer' margin='0 10px' width='20%' padding='8px 0' size='16px'><b>나가기</b></Button>
                    <Button _onClick={editPost} borderRadius='3px' border='none' color='#fff' hoverBg='rgb(27, 231, 170)' bg='rgb(18, 184, 134)' cursor='pointer' margin='0 10px' width='20%' padding='8px 0' size='16px'><b>수정하기</b></Button>
                </Grid>
            </div>
            <div className="preview">
                <h2>{title}</h2>
                {/* 이전 프리뷰 이미지를 보여주고, 새로운 프리뷰 이미지 보여줌 */}
                {preview?<img alt="예시이미지" src={preview?preview:null}></img>:null}
                {preview?null:<img alt='수정전이미지' src={imgs}></img>}
                <MarkdownRender>{content}</MarkdownRender>
            </div>
        </AddPostStyle>
    )
}

// AddPostStyle component
const AddPostStyle = styled.div`
    display:flex;
    position: relative;
    img {
        width: 100%;
    }
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

export default EditPost;