import { combineReducers } from 'redux';

import ChatReducer from './ChatReducer';
import SettingsReducer from './SettingsReducer';

export default combineReducers({
    chat: ChatReducer,
    settings: SettingsReducer,
});
