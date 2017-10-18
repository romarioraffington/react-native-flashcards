// External Dependencies
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import { AsyncStorage } from 'react-native'
import { composeWithDevTools } from 'remote-redux-devtools'
import { persistStore, autoRehydrate } from 'redux-persist';
import { createStore, applyMiddleware, compose } from 'redux'

// Our Dependencies
import reducer from  './reducer'

// Only log in development
const logger = createLogger({ predicate: (getState, action) => __DEV__ })

// Apply middlewares
const enhancer = composeWithDevTools(
  applyMiddleware(
    thunk,
    logger,
  ),
  autoRehydrate(),
)

// Create store and periodically to AsyncStorage
const store = createStore(reducer, {} , enhancer);
persistStore(store, { storage: AsyncStorage });

export default store