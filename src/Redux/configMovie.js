import {combineReducers,createStore} from "redux";
import { MovieReduce } from "./Reduce/MovieReduce";


const rootReducer = combineReducers({

    MovieReduce,


})



export const store  = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());