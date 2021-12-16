import { createAction,handleActions } from "redux-actions"
import { produce } from "immer"

// axios파일
import { apis } from "../../shared/axios";

const GET_COMMENT = "GET_COMMENT"
const ADD_COMMENT = "ADD_COMMENT"
const DELETE_COMMENT = "ADD_COMMENT"

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
        .getComment(id)
        .then((res) => {
            console.log(res)
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
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    };
};

// ADD POST
const deleteCommentsDB = (id) => {
    return function (dispatch, getState, { history }) {
        apis
        .deleteComment(id)
        .then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    };
};



export default handleActions({
    [GET_COMMENT] : (state,action) => produce(state,(draft) => {
        draft.list = action.payload.list
    }),
    [ADD_COMMENT] : (state,action) => produce(state,(draft) => {
        draft.list.push(action.payload.list)
    }),
    [DELETE_COMMENT] : (state,action) => produce(state,(draft) => {
        draft.list.push(action.payload.list)
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