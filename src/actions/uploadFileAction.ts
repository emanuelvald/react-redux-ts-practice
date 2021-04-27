import axios from 'axios';
import { Dispatch } from 'redux';

import { UPLOAD_FILE_ERROR, UPLOAD_FILE_SUCCESS, UploadFileTypes } from '../types/types';

export const uploadFileAction = (data: FormData | undefined) => (
  dispatch: Dispatch<UploadFileTypes>,
) => {
  console.log('uploadFileAction: ', data);
  axios
    .post('http://localhost:3000/file-parser/upload', data, {
      headers: {
        'Content-Type':
          'multipart/form-data;boundary=<calculated when request is sent>',
      },
    })
    .then(() =>
      dispatch({
        type: UPLOAD_FILE_SUCCESS,
        payload: null,
      }),
    )
    .catch((error) => {
      dispatch({
        type: UPLOAD_FILE_ERROR,
        payload: error,
      });
    });
};
