import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";
import axios from "axios";

// 액션 
const GET_LIKE = "GET_LIKE" 
const ADD_LIKE = "ADD_LIKE" 
const DELETE_LIKE = "DELETE_LIKE" 


// 액션 크리에이터

const getLike = createAction(GET_LIKE, (Detail_post) => ({ Detail_post }));
const addLike = createAction(ADD_LIKE, (Detail_post) => ({ Detail_post }));
const deleteLike = createAction(DELETE_LIKE, (Detail_post) => ({ Detail_post }));

// 초기값 설정
const initialState ={
    list:[]
} 
// 미들웨어 

// GET POST
const getLikeDB = (id) => {
    return function (dispatch, getState, { history }) {
        apis
        .getLike(id)
        .then((res) => {
            console.log(res.data)
            dispatch(getLike(res.data))
        }).catch((err) => {
            console.log(err)
        })
    };
};

const addLikeDB = (id) => {
    return function (dispatch, getState, { history }) {
        apis
        .addLike(id)
        .then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    };
};

const deleteLikeDB = (id) => {
    return function (dispatch, getState, { history }) {
        apis
        .deleteLike(id)
        .then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    };
};

export default handleActions({
    [GET_LIKE] : (state,action) => produce(state,(draft) => {
        draft.list=action.payload.Detail_post
    }),
},initialState)

const actionCreators = {
    getLike,
    getLikeDB,
    addLike,
    addLikeDB,
    deleteLike,
    deleteLikeDB


}

export {actionCreators}
