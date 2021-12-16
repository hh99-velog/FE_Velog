import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";
import axios from "axios";

// 액션 
const DELETE = "DELETE" // 삭제하기

// 액션 크리에이터

const deliteDetail = createAction(DELETE, (Detail_post) => ({ Detail_post }));

// 초기값 설정
const initialState ={
    list:[]
} 
// 미들웨어 
const postDelete = (id) => {
    return function (dispatch, getState, { history }) {
        console.log("ddddss")

        axios({
            method: "delete",
            url: `https://run.mocky.io/v3/c86acbab-be47-4d90-a253-8bd1007ad733/${id}`,
        }).then((res) => {
            console.log(res)
            return
            
        }).catch((err) => {
            console.log(err)
        })



}
}


  export default handleActions({
    [DELETE] : (state,action) => produce(state,(draft) => {

    })
},initialState)

        



const actionCreators = {
    deliteDetail,
    postDelete,


}

export {actionCreators}
