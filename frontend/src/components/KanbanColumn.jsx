/* eslint-disable react/prop-types */
import TaskCard from './TaskCard';

const KanbanColumn = ({ column, tasks, onTaskStatusChange }) => {
  const handleTaskStatusChange = (task, newStatus) => {
    onTaskStatusChange(task, newStatus);
  };

  return (
    <div key={column.id} className="flex-shrink-0 w-80">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-semibold">{column.title}</h2>
        <span className="text-gray-500">{tasks.length}</span>
      </div>
      
      <div className={`p-4 rounded-lg ${column.color} min-h-[calc(100vh-120px)]`}>
        {tasks.map((task, index) => (
          <TaskCard key={index} task={task} onStatusChange={handleTaskStatusChange} />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;