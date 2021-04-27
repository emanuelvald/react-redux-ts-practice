import axios from 'axios';
import { Dispatch } from 'redux';

import { TFile, UPLOAD_FILE_ERROR, UPLOAD_FILE_SUCCESS, UploadFileTypes } from '../types/types';

export const addProductAction = (file: TFile) => (
  dispatch: Dispatch<UploadFileTypes>
) => {
  axios
    .post("localhost:3000/file-parser/upload", file)
    .then(() =>
      dispatch({
        type: UPLOAD_FILE_SUCCESS,
        payload: file,
      })
    )
    .catch((error) => {
      dispatch({
        type: UPLOAD_FILE_ERROR,
        payload: error,
      });
    });
};
