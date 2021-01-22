import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";

export default createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware.withExtraArgument({ axios }))
);

// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import axios from 'axios';
// import rootReducer from './reducers';
// import loggingMiddleware from 'redux-logger';
// import thunkMiddleware from 'redux-thunk';

// export default createStore(
//   rootReducer,
//   composeWithDevTools(
//     applyMiddleware(
//       thunkMiddleware.withExtraArgument({ axios }),
//       loggingMiddleware
//     )
//   )
// );

// this is what Depak had
