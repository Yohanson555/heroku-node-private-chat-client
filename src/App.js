import React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Root } from './components';

import configureStore from './configureStore';

import 'antd/dist/antd.css';
import './assets/css/App.css';

function App() {
  const cfg = configureStore();

  return (
    <Provider store={cfg.store}>
      <PersistGate
        loading={null}
        persistor={cfg.persistor}
      >
        <Root />
      </PersistGate>
    </Provider>
  );
}

export default App;
