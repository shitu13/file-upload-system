/* eslint-disable no-unused-vars */
// src/components/FileUploadDialog.jsx
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { fileUpload } from '../services/service.js';

const FileUploadDialog = ({ open, onClose, onUploadSuccess }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const getFileExtension = (filename) => filename.split('.').pop();

  const handleUpload = async () => {
    setUploading(true);
    try {
      const response = await fileUpload(uploadedFiles);

      if (response.status === 200) {
        onUploadSuccess();
        setUploadedFiles([]);
      }
    } catch (error) {
      alert('File upload failed. Please try again.');
    } finally {
      setUploading(false);
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Upload Files</h2>

        <input 
          type="file" 
          multiple 
          onChange={handleFileChange} 
          className="mb-4 w-full p-2 border rounded" 
        />
        
        {uploadedFiles.length > 0 && (
          <ul className="mb-4">
            {uploadedFiles.map((file, index) => (
              <li key={index} className="flex justify-between items-center p-1 border-b">
                <span className="text-sm">{file.name}</span>
                <span className="text-xs text-gray-500">.{getFileExtension(file.name)}</span>
              </li>
            ))}
          </ul>
        )}
        
        <button 
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 w-full mb-2"
          onClick={handleUpload}
          disabled={uploading || uploadedFiles.length === 0}
        >
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
        
        <button 
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FileUploadDialog;
