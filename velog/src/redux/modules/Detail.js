import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";
import axios from "axios";

// 액션 
const GET_DETAIL = "GET_DETAIL" // 삭제하기
const DELETE_DELETE = "DELETE" // 삭제하기
const RESET = "RESET" // 삭제하기

// 액션 크리에이터

const getDetail = createAction(GET_DETAIL, (Detail_post) => ({ Detail_post }));
const deliteDetail = createAction(DELETE_DELETE, (Detail_post) => ({ Detail_post }));
const resetDetail = createAction(RESET, () => ({ }));

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

export default handleActions({
    [GET_DETAIL] : (state,action) => produce(state,(draft) => {
        draft.list=action.payload.Detail_post
    }),
    [DELETE_DELETE] : (state,action) => produce(state,(draft) => {
        draft.list=action.payload.Detail_post
    }),
    [RESET] : (state,action) => produce(state,(draft) => {
        draft.list=[]
    })
},initialState)

        



const actionCreators = {
    getDetail,
    getDetailDB,
    deliteDetail,
    resetDetail,


}

export {actionCreators}
