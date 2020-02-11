import React from 'react';
import Main from './components/MainComponent';
import {Text} from 'react-native-elements';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();


export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
    
    
  );
}


