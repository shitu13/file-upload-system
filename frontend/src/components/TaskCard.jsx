// src/components/TaskCard.jsx
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Calendar, Paperclip, MessageSquare, CheckSquare } from 'lucide-react';
import FileUploadDialog from './FileUploadDialog';

const TaskCard = ({ task }) => {
  const [priorityCount, setPriorityCount] = useState(task.metrics.priority || 0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handlePriorityClick = () => {
    setIsDialogOpen(true); // Open the FileUploadDialog
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleUploadSuccess = () => {
    setPriorityCount((prevCount) => prevCount + 1); // Increase count by 1 on successful upload
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-200" />
          <span className="font-medium">{task.clientName}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-200" />
          <span className="text-sm">{task.assignedTo}</span>
        </div>
      </div>

      <div className="flex justify-between items-center mb-2">
        <p className="text-gray-600 text-sm">{task.description}</p>
        <CheckSquare size={16} className="text-gray-500" /> {/* Right-aligned checklist icon */}
      </div>

      <div className="flex items-center text-xs text-gray-500 gap-4"> {/* Increased gap */}
        <div className="flex items-center gap-1">
          {/* Smaller parallel avatars */}
          <div className="w-5 h-5 rounded-full bg-gray-200" />
          <div className="w-5 h-5 rounded-full bg-gray-200 -ml-2" />
          <span className="font-medium ml-1">{task.metrics.score}+</span>
          <div className="flex items-center gap-1 ml-1">
            <MessageSquare size={14} className="text-gray-500" />
            <span className="text-xs text-gray-500">{task.metrics.messageCount}</span> {/* Message count */}
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Calendar size={14} />
          <span>{task.metrics.dueDate}</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer" onClick={handlePriorityClick}>
          <Paperclip size={14} />
          <span>{priorityCount}</span>
        </div>
      </div>

      {/* Render the FileUploadDialog */}
      <FileUploadDialog open={isDialogOpen} onClose={handleCloseDialog} onUploadSuccess={handleUploadSuccess} />
    </div>
  );
};

export default TaskCard;
