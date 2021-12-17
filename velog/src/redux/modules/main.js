import { createAction,handleActions } from "redux-actions"
import { produce } from "immer"
import Swal from 'sweetalert2'

// axios파일
import axios from "axios";
import { apis } from "../../shared/axios";

const GET_POST = "GET_POST"
const ADD_POST = "ADD_POST"

const getPostList = createAction(GET_POST,(list) => ({list}))   
const addPost = createAction(ADD_POST,(list) => ({list}))   


const initialState ={
    list:[]
}

// GET POST
const getPostListDB = () => {
    return function (dispatch, getState, { history }) {

        apis
        .getPost()
        .then((res) => {
          // 받는 데이터 분류

            const list = res.data.data
            dispatch(getPostList({list}));
        })
        .catch((err) => {
            console.log(err);
            return;
        });
    };
};

// ADD POST
const addPostDB = (addFormData) => {
    return async function (dispatch, getState, { history }) {
  
        const accessToken = window.localStorage.getItem('token')

        axios({
            method: "post",
            url: "http://3.37.127.5/api/boards",
            data: addFormData,
            headers: {
              "Content-Type": "multipart/form-data",
              "Authorization": `Bearer ${accessToken}`,
            },
        })
        .then((res) => {
             Swal.fire({
                icon: 'success',
                text: '새 글이 등록되었습니다',
                color: '#777',
                confirmButtonColor: '#12b886'
              }).then(() => {
                history.push('/')
              })
        })
        .catch((err) => {
            console.log(err);
            window.alert(err.response.data.errorMessage);
            return;
        });
    };
};

export default handleActions({
    [GET_POST] : (state,action) => produce(state,(draft) => {
        draft.list = action.payload.list.list
    }),
    [ADD_POST] : (state,action) => produce(state,(draft) => {
        
    })
},initialState)

const actionCreators = {
    getPostList,
    getPostListDB,
    addPost,
    addPostDB

}

export {actionCreators}