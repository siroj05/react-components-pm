import { useState } from 'react';
import { ScrollArea } from './ui/scroll-area';

const tasks = [
  { id: 1, name: 'Task 1', start: '2024-09-01', end: '2024-09-05' },
  { id: 2, name: 'Task 2', start: '2024-09-02', end: '2024-09-08' },
  { id: 3, name: 'Task 3', start: '2024-09-06', end: '2024-09-10' },
];

function GanttChart() {
  const [days, setDays] = useState([
    'Sep 01', 'Sep 02', 'Sep 03', 'Sep 04', 'Sep 05', 'Sep 06', 'Sep 07', 'Sep 08', 'Sep 09', 'Sep 10',
  ]);

  return (
    <div className="flex flex-col items-start w-full h-full">
      {/* Header */}
      <div className="flex w-full border-b">
        {days.map((day, index) => (
          <div key={index} className="w-24 text-center border-r p-2 bg-gray-200">
            {day}
          </div>
        ))}
      </div>

      {/* Task Rows */}
      <ScrollArea className="flex flex-col w-full overflow-x-scroll">
        {tasks.map((task) => (
          <div key={task.id} className="flex w-full items-center border-b">
            {/* Task Name */}
            <div className="w-32 text-left border-r p-2 bg-gray-100">
              {task.name}
            </div>

            {/* Task Bar */}
            <div className="flex-grow flex">
              {days.map((day, index) => (
                <div key={index} className="w-24 h-12 border-r relative">
                  {new Date(day) >= new Date(task.start) && new Date(day) <= new Date(task.end) ? (
                    <div className="absolute inset-0 bg-blue-500"></div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  );
}

export default GanttChart;
