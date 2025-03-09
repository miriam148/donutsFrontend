import { combineReducers } from "redux"
import donutReducer from "./donutReducer";

const reducers = combineReducers({
    donuts: donutReducer,
})


export default reducers