import { TEST_NUMBER_INCREMENT, LIST_OF_USERS } from '../actions/ActionTypes'

const initialState = {
    incrementedNum: 0,
    userList:null
}

const loginReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case TEST_NUMBER_INCREMENT:
            let num = state.incrementedNum + 1
            return { ...state, incrementedNum: num }

        case LIST_OF_USERS:
            return { ...state, userList: payload }

        default:
            return state
    }
}

export default loginReducer