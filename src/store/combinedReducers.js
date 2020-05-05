import {combineReducers} from 'redux';
// import {reducer as network} from 'react-native-offline';
// import globalReducer from '../Components/Global/redux/reducer';
import LoginReducer from '../reducers/LoginReducer'

export default combineReducers({
  // network,
  login: LoginReducer,
})
