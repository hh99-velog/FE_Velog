import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// 액션 
const DETAIL_GET ="DETAIL_GET" // 디테일페이지 데이터 가져오기
const DELETE = "DELETE" // 삭제하기

// 액션 크리에이터
const  getDetail = createAction(DETAIL_GET, (Detail_post) => ({ Detail_post }));
const deliteDetail = createAction(DELETE, (Detail_post) => ({ Detail_post }));

// 

