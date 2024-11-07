import { useState } from 'react';
import KanbanColumn from './KanbanColumn';
import sampleData from '../utils/sampleData';

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(sampleData);

  const columns = [
    { id: 'incomplete', title: 'Incomplete', color: 'bg-red-100' },
    { id: 'todo', title: 'To Do', color: 'bg-blue-100' },
    { id: 'doing', title: 'Doing', color: 'bg-yellow-100' },
    { id: 'review', title: 'Under Review', color: 'bg-purple-100' },
    { id: 'completed', title: 'Completed', color: 'bg-green-100' }
  ];

  const handleTaskStatusChange = (task, newStatus) => {
    const updatedTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return { ...t, status: newStatus };
      }
      return t;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="h-screen bg-gray-100">
      <div className="h-full flex overflow-x-auto p-6">
        <div className="flex gap-4 flex-nowrap">
          {columns.map((column) => (
            <KanbanColumn
              key={column.id}
              column={column}
              tasks={tasks.filter((task) => task.status === column.id)}
              onTaskStatusChange={handleTaskStatusChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;