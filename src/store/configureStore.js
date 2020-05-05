import AsyncStorage from '@react-native-community/async-storage';
// import {createLogicMiddleware} from 'redux-logic';
import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
// import {
//   createNetworkMiddleware,
//   checkInternetConnection,
//   offlineActionTypes,
// } from 'react-native-offline';
import AppReducer from './combinedReducers';
// import logic from './logic';
import Reactotron from '../utils/ReactronConfig';

// const logicMiddleware = createLogicMiddleware(logic);

// const networkMiddleware = createNetworkMiddleware({
//   regexActionType: /OFFLINE/,
//   // queueReleaseThrottle: 200,
// });

// const middleware = applyMiddleware(networkMiddleware,thunk);

const enhancer = compose(
  applyMiddleware(thunk),
  Reactotron.createEnhancer(),
);

const persistConfig = {
  timeout: 0,
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, AppReducer);

export const store = createStore(persistedReducer, enhancer);

// persistStore(store, null, () => {
//   // After rehydration completes, we detect initial connection
//   checkInternetConnection().then(isConnected => {
//     store.dispatch({
//       type: offlineActionTypes.CONNECTION_CHANGE,
//       payload: isConnected,
//     });
//     //callback(); // Notify our root component we are good to go, so that we can render our app
//   });
// });

// export const persistor = persistStore(store);
