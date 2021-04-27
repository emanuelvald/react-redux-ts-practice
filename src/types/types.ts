export const UPLOAD_FILE = 'UPLOAD_FILE';
export const UPLOAD_FILE_SUCCESS = 'UPLOAD_FILE_SUCCESS';
export const UPLOAD_FILE_ERROR = 'UPLOAD_FILE_ERROR';

/* export type TFile = {
  file: FileList;
}; */

export type TError = {
  code: string;
  message: string;
};

export interface UploadFile {
  type: typeof UPLOAD_FILE;
  payload: true;
}

export interface UploadFileSuccess {
  type: typeof UPLOAD_FILE_SUCCESS;
  payload: FileList | null;
}

export interface UploadFileError {
  type: typeof UPLOAD_FILE_ERROR;
  payload: TError;
}

export type UploadFileTypes = UploadFile | UploadFileSuccess | UploadFileError;
