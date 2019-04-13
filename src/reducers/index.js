import { NUMBER } from '../actions/types'
import { combineReducers } from 'redux'

const initalState = {
    number: ""
}

const reducer = (state = { initalState }, action) => {
    switch (action.type) {
        case NUMBER:
            return { ...state, number: action.payload }
        default:
            return state
    }
}

const Reducers = combineReducers({
    reducer
})

export default Reducers