// External Dependencies
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'remote-redux-devtools'

// Our Dependencies
import reducer from  './reducer'

// Only log in development
const logger = createLogger({ predicate: (getState, action) => __DEV__ })

// Apply middlewares
const enhancer = composeWithDevTools(
  applyMiddleware(
    logger,
    promiseMiddleware(),
  )
)

export default createStore(reducer, {}, enhancer);