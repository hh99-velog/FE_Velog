import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import Swal from 'sweetalert2'

// axios
import axios from "axios";
import { apis } from "../../shared/axios";

// 액션 
const GET_DETAIL = "GET_DETAIL" 
const EDIT_DETAIL = "EDIT_DETAIL" 
const DELETE_DELETE = "DELETE" 
const RESET = "RESET"

// 액션 크리에이터

const getDetail = createAction(GET_DETAIL, (Detail_post) => ({ Detail_post }));
const editDetail = createAction(EDIT_DETAIL, (Detail_post) => ({ Detail_post }));
const deleteDetail = createAction(DELETE_DELETE, (Detail_post) => ({ Detail_post }));
const resetDetail = createAction(RESET, () => ({}));

// 초기값 설정
const initialState ={
    list:[]
} 
// 미들웨어 

// GET POST
const getDetailDB = (id) => {
    return function (dispatch, getState, { history }) {
        apis
        .getDetailPost(id)
        .then((res) => {
            dispatch(getDetail(res.data))
        }).catch((err) => {
            console.log(err)
        })
    };
};

// EDIT POST
const editDetailDB = (id,addFormData) => {
    return function (dispatch, getState, { history }) {
        const accessToken = window.localStorage.getItem('token')
        axios({
            method: "put",
            url: `http://3.37.127.5/api/boards/detail/${id}`,
            data: addFormData,
            headers: {
              "Content-Type": "multipart/form-data",
              "Authorization": `Bearer ${accessToken}`,
            },
        })
        .then((res) => {
            Swal.fire({
                icon: 'success',
                text: '글이 수정되었습니다',
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

const deleteDetailDB = (id) => {
    return function (dispatch, getState, { history }) {
        apis
        .deleteDetailPost(id)
        .then((res) => {
            console.log('삭제성공')
        }).catch((err) => {
            console.log(err)
        })
    };
};

export default handleActions({
    [GET_DETAIL] : (state,action) => produce(state,(draft) => {
        draft.list=action.payload.Detail_post
    }),
    [EDIT_DETAIL] : (state,action) => produce(state,(draft) => {
        
    }),
    [DELETE_DELETE] : (state,action) => produce(state,(draft) => {

    }),
    [RESET] : (state,action) => produce(state,(draft) => {
        draft.list=[]
    })
},initialState)

const actionCreators = {
    getDetail,
    getDetailDB,
    deleteDetail,
    resetDetail,
    editDetailDB,
    editDetail,
    deleteDetailDB
}

export {actionCreators}
