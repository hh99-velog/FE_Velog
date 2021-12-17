import { createAction,handleActions } from "redux-actions"
import { produce } from "immer"

// axios파일
import { apis } from "../../shared/axios";

const GET_COMMENT = "GET_COMMENT"
const ADD_COMMENT = "ADD_COMMENT"
const DELETE_COMMENT = "DELETE_COMMENT"

const getComments = createAction(GET_COMMENT,(comments) => ({comments}))   
const addComments = createAction(ADD_COMMENT,(comments) => ({comments}))   
const deleteComments = createAction(DELETE_COMMENT,(comments) => ({comments}))   


const initialState ={
    list:[]
}

// GET POST
const getCommentsDB = (id) => {
    return function (dispatch, getState, { history }) {
        apis
        .getDetailPost(id)
        .then((res) => {
            const list = res.data.commentResponseDtoList
            dispatch(getComments(list))
        }).catch((err) => {
            console.log(err)
        })
    };
};

// ADD POST
const addCommentsDB = (id,data) => {
    return function (dispatch, getState, { history }) {
        apis
        .addComment(id,data)
        .then((res) => {
            dispatch(addComments(res))
        }).catch((err) => { 
            console.log(err)
        })
    };
};

// DELETE POST
const deleteCommentsDB = (id) => {
    return function (dispatch, getState, { history }) {
        apis
        .deleteComment(id)
        .then((res) => {
            dispatch(deleteComments(res.data))
        }).catch((err) => {
            console.log(err)
        })
    };
};



export default handleActions({
    [GET_COMMENT] : (state,action) => produce(state,(draft) => {
        draft.list = action.payload.comments
    }),
    [ADD_COMMENT] : (state,action) => produce(state,(draft) => {
        draft.list.push(action.payload.comments.data)
    }),
    [DELETE_COMMENT] : (state,action) => produce(state,(draft) => {
        const list = [...state.list]
        const deleteList = list.filter(x=> x.id !== action.payload.comments.id)
        draft.list = deleteList
    }),
},initialState)

const actionCreators = {
    getComments,
    getCommentsDB,
    addComments,
    addCommentsDB,
    deleteComments,
    deleteCommentsDB

}

export {actionCreators}