import { applyMiddleware, combineReducers, createStore, Reducer, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { AppState, progressReducer } from '.'

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  progress: progressReducer,
})

export const initializeStore = (initialState?: AppState): Store<AppState> =>
  createStore(
    rootReducer,
    initialState,
    process.env.NODE_ENV === 'development'
      ? composeWithDevTools(applyMiddleware(thunk))
      : applyMiddleware(thunk)
  )
