import { createStore, applyMiddleware } from "redux"
import axios from "axios"
import thunkMiddleware from "redux-thunk"
import rootReducer from "./reducers"

export default createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware.withExtraArgument({ axios }))
)
