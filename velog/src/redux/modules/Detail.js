import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// 액션 
const DELETE = "DELETE" // 삭제하기

// 액션 크리에이터
const deliteDetail = createAction(DELETE, (Detail_post) => ({ Detail_post }));

// 초기값 설정
const initialState = []



