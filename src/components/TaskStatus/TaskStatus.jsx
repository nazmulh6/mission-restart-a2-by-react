import React from 'react';
import TaskCompleted from '../TaskCompleted/TaskCompleted';

const TaskStatus = ({ selectedTicket, removeTicket, completedTicket, setCompletedTicket }) => {
    return (
        <div>
            {
                selectedTicket.map(ticket => <TaskCompleted
                    ticket={ticket}
                    removeTicket={removeTicket}
                    completedTicket={completedTicket}
                    setCompletedTicket={setCompletedTicket}
                ></TaskCompleted>)
            }
        </div>
    );
};

export default TaskStatus;