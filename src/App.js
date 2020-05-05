/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import FlashMessage from "react-native-flash-message";
import Navigator from './navigation';
import { store, persistor } from './store/configureStore';
import { NetworkProvider } from 'react-native-offline';


//USAGE:
//  if RN_PAPER component like button   //theme={{ roundness: 3 }} 
//  if RN component
//  import { withTheme } from 'react-native-paper'  //const { colors } = props.theme;   //<Text style={{ color: colors.primary }}/>   //export default withTheme(MyComponent)  
const theme = {
  ...DefaultTheme,
  roundness: 2,   //roundness of common elements, such as buttons.
  colors: {
    ...DefaultTheme.colors,
    // primary: '#3498db',
    // accent: '#f1c40f',
    // background: '#3498db',
    // surface: '#f1c40f', 
    // text: '#3498db',
    // disabled: '#f1c40f',
    // placeholder: '#3498db',
    // backdrop: '#f1c40f',
  },
  fonts: {
    // regular: 'Roboto-Regular',
    // medium: 'Roboto-Medium',
    // light: 'Roboto-Light',
    // thin: 'Roboto-Thin',
  },
  dark: false   //dark (boolean): whether this is a dark theme or light theme.
};

const App = () => {
  return (
    <Provider store={store}>
      {/* <PersistGate  persistor={persistor}> */}
      <PaperProvider theme={theme}>
        <NetworkProvider
          pingTimeout={10000}
          pingInterval={30000}
          pingServerUrl="https://www.google.com/" >
          <Navigator />
        </NetworkProvider>
        <FlashMessage position="top" animated={true} duration={1000}         // GLOBAL FLASH MESSAGE COMPONENT INSTANCE {"success" (green), "warning" (orange), "danger" (red), "info" (blue) and "default" (gray)}
        />
      </PaperProvider>
      {/* </PersistGate> */}
    </Provider>
  )
}

export default App
