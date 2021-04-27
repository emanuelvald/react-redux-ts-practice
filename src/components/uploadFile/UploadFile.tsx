import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { uploadFileAction } from '../../actions/uploadFileAction';

const UploadFile: React.FC = () => {
  const dispatch = useDispatch();

  const [file, setFile] = useState<FormData>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const formData = new FormData();
      // Update the formData object
      formData.append('file', e.target.files[0]);

      setFile(formData);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(uploadFileAction(file));
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>Notes</label>
      <input
        type="file"
        name="file"
        accept=".pdf,.doc,.docx,.xls,.xlsx"
        onChange={(e) => handleChange(e)}
      />
      ;<button type="submit">Agregar</button>
    </form>
  );
};

export default UploadFile;
