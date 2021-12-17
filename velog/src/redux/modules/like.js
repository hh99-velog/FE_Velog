import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// axios
import { apis } from "../../shared/axios";

// 액션 
const GET_LIKE = "GET_LIKE" 
const ADD_LIKE = "ADD_LIKE" 
const DELETE_LIKE = "DELETE_LIKE" 


// 액션 크리에이터

const getLike = createAction(GET_LIKE, (Detail_post) => ({ Detail_post }));
const addLike = createAction(ADD_LIKE, () => ({}));
const deleteLike = createAction(DELETE_LIKE, () => ({}));

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
            dispatch(addLike())
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
            dispatch(deleteLike())
        }).catch((err) => {
            console.log(err)
        })
    };
};

export default handleActions({
    [GET_LIKE] : (state,action) => produce(state,(draft) => {
        draft.list=action.payload.Detail_post
    }),
    [ADD_LIKE] : (state,action) => produce(state,(draft) => {
        const like = [...state.list]
        draft.list=[Number(like[0])+1,'false']
    }),
    [DELETE_LIKE] : (state,action) => produce(state,(draft) => {
        const like = [...state.list]
        draft.list=[Number(like[0])-1,'true']
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
