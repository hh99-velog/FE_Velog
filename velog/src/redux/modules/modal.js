import { createAction,handleActions } from "redux-actions"
import { produce } from "immer"

const SET_IN_MODAL = "SET_IN_MODAL"
const SET_UPMODAL = "SET_UP_MODAL"
const EXIT_MODAL = "EXIT_MODAL"


const setInModal = createAction(SET_IN_MODAL,() => ({}))   
const setUpModal = createAction(SET_UPMODAL,() => ({}))   
const ExitModal = createAction(EXIT_MODAL,() => ({}))   


const initialState ={
    inModal:false,
    upModal:false
}

export default handleActions({
    [SET_IN_MODAL] : (state,action) => produce(state,(draft) => {
        draft.inModal = true
        draft.upModal = false
    }),
    [SET_UPMODAL] : (state,action) => produce(state,(draft) => {
        draft.inModal = false
        draft.upModal = true
    }),
    [EXIT_MODAL] : (state,action) => produce(state,(draft) => {
        draft.inModal = false
        draft.upModal = false
    }),
},initialState)

const actionCreators = {
    setInModal,
    setUpModal,
    ExitModal,
}

export {actionCreators}