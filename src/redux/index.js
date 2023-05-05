import { combineReducers } from "redux";
import { reducerGetItem, reducerSetQuntity } from "./reducer";

const reducers = combineReducers({
    items: reducerGetItem,
    quntity: reducerSetQuntity,
})
export default reducers;