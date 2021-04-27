import { TError, UPLOAD_FILE_SUCCESS, UploadFileTypes } from '../types/types';

interface IState {
  loading: boolean;
  uploadFile: FileList | null;
  error: TError | null;
}

const initialState: IState = {
  loading: false,
  uploadFile: null,
  error: null,
};

const uploadFileReducer = (
  state: IState = initialState,
  action: UploadFileTypes,
): IState => {
  switch (action.type) {
    case UPLOAD_FILE_SUCCESS:
      return {
        ...state,
        loading: false,
        uploadFile: action.payload,
      };
    default:
      return state;
  }
};

export default uploadFileReducer;
