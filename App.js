import React from 'react';
import MainScreen from './components/MainScreen/MainScreen';
import MediaScreen from './components/MediaScreen/MediaScreen';
import WebViewScreen from './components/WebViewScreen/WebViewScreen';
import {Router, Scene, Stack} from 'react-native-router-flux';


const App = () => {

  return (
      <Router>
        <Stack key="root">
          <Scene key="home" component={MainScreen} hideNavBar={true} />
          <Scene key="WebViewScreen" component={WebViewScreen} />
          <Scene key="fullscreenVideo" component={MediaScreen} hideNavBar={true} duration={1} />
        </Stack>
      </Router>
  );
};

export default App;
