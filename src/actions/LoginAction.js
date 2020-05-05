import { TEST_NUMBER_INCREMENT, LIST_OF_USERS } from './ActionTypes'

export const testNumberIncrementAction = payload => {
    return {
        type: TEST_NUMBER_INCREMENT,
        payload
    }
}

export const listOfUserAction = () => {
    return dispatch => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then((responseJson) => {
                console.log('listOfUserAction', responseJson)
                dispatch({
                    type: LIST_OF_USERS,
                    payload : responseJson
                })
            })
            .catch(error => console.log(error)) //to catch the errors if any
    }
}


