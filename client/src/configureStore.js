/* eslint-disable import/no-anonymous-default-export */
import { applyMiddleware, createStore } from "redux"
import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/es/storage'
import thunk from "redux-thunk"
import storage from 'redux-persist/lib/storage'

import rootReducers from './RootReducers'

const persistConfig = {
    key:'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = createStore(persistedReducer, applyMiddleware(thunk))

export const persistor = persistStore(store)
