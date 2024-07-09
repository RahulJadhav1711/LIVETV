import AsyncStorage from '@react-native-community/async-storage';
import {createLogger} from 'redux-logger';
import {applyMiddleware, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import RootReducers from '../reducers/RootReducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['ReduxReducers'],
};

const persistedReducers = persistReducer(persistConfig, RootReducers);

const configStore = createStore(
  persistedReducers,
  applyMiddleware(createLogger()),
);

let persistor = persistStore(configStore);

export {persistor, configStore};
