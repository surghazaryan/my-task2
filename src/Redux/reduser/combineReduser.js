import { combineReducers } from "redux";
import MainReduser from "./MainReduser";
import ReduserHome from "./ReduserHome";

const reduser = combineReducers({
    login: MainReduser,
    main:ReduserHome
})

export default reduser