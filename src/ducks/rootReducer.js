import { combineReducers } from "redux";

import dataReducer from "./dataReducer";
import settingsReducer from "./settingsReducer";

const rootReducer = combineReducers({
    data: dataReducer,
    settings: settingsReducer
});

export default rootReducer;
