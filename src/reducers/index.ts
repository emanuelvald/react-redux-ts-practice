import { combineReducers } from 'redux';

import UploadFileReducer from './UploadFileReducer';

export default combineReducers({
  uploadFile: UploadFileReducer,
});
