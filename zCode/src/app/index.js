import React from 'react';
import AppNavigator from '../navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, configStore} from '../redux/store/ReduxStore';

const App = () => {
  return (
    <Provider store={configStore}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
