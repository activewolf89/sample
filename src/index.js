import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import registerServiceWorker from "service-worker-loader";
import {ThemeProvider} from 'styled-components';
import configureStore from './configureStore';
import { AppContainer } from 'react-hot-loader';

import {createBrowserHistory} from 'history';
import ReactBreakpoints from 'react-breakpoints'
const history = createBrowserHistory()
const initialState = {};
const store = configureStore(initialState, history);

const MOUNT_NODE = document.getElementById('root');
const theme = {
  BackgroundColor: 'red',
  ThemedColor: 'wheat',
  ThemedFontColor: 'black',
  DarkColor: 'white',
  LightColor: 'wheat',
  ThemedFont: "Arial, Helvetica, sans-serif",
  Accent: "#303030",
  AccentColor: 'white',
  HighlightedColor: "maroon",
  Tacori:'#01107c',
  Armoire:'#520844',
  Armoire_Color:'white'
}
const breakpoints = {
  mobile: 360,
  desktop: 996,
}
// Wrap the rendering in a function:
const render = Component => {
  ReactDOM.render(
    // Wrap App inside AppContainer
    <AppContainer>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ConnectedRouter  history={history}>
            <ReactBreakpoints breakpoints={breakpoints}>
              <App />
            </ReactBreakpoints>
            </ConnectedRouter>
        </ThemeProvider>
      </Provider>
    </AppContainer>,
    MOUNT_NODE
  );
};

// Do this once
registerServiceWorker();

// Render once
render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('containers/App', () => {
    render(App);
  });
}
