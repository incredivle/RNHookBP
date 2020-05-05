import Reactotron from 'reactotron-react-native';
// import {NativeModules} from 'react-native';

import {reactotronRedux} from 'reactotron-redux';
import {AsyncStorage} from 'react-native';

// let scriptHostname;
// if (__DEV__) {
//     const scriptURL = NativeModules.SourceCode.scriptURL;
//     scriptHostname = scriptURL.split('://')[1].split(':')[0];
// }
const reactotron = Reactotron.configure()
  .useReactNative()
  .setAsyncStorageHandler(AsyncStorage)
  .use(reactotronRedux()) //  <- here i am!
  .connect(); //Don't forget about me!

const yeOldeConsoleLog = console.log;

// make a new one
console.log = (...args) => {
  // always call the old one, because React Native does magic swizzling too
  yeOldeConsoleLog(...args);
  // send this off to Reactotron.
  reactotron.display({
    name: 'CONSOLE.LOG',
    value: args,
    preview: args.length > 0 && typeof args[0] === 'string' ? args[0] : null,
  });
};

// export default Reactotron;
export default reactotron;
