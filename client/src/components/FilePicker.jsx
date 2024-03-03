import React from 'react';
import CustomButton from './CustomButton';

const FilePicker = ({ file, setFile, readFile }) => {
  const handleRemoveFile = () => {
    setFile(null);
  };

  return (
    <div className="filepicker-container">
      <div className="flex flex-col flex-1">
        <input 
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>

        <p className="mt-2 text-xs text-gray-500 truncate">
          {file === null ? "No file selected" : file.name}
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mt-4">
        <CustomButton 
          type="outline"
          title="Logo"
          handleClick={() => readFile('logo')}
          customStyles="text-xs"
        />
        <CustomButton 
          type="filled"
          title="Full"
          handleClick={() => readFile('full')}
          customStyles="text-xs"
        />
        {file && (
          <CustomButton 
            type="filled"
            title="Remove"
            handleClick={handleRemoveFile}
            customStyles="text-xs bg-red-500" // Adjust the background color as needed
          />
        )}
      </div>
    </div>
  );
};

export default FilePicker;
