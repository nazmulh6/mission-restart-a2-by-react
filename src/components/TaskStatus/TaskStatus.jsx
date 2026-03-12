import React from 'react';
import TaskCompleted from '../TaskCompleted/TaskCompleted';

const TaskStatus = ({selectedTicket,removeTicket}) => {
    return (
        <div>
            {
               selectedTicket.map(ticket=> <TaskCompleted 
                ticket={ticket}
                removeTicket={removeTicket}
                ></TaskCompleted>)
            }
        </div>
    );
};

export default TaskStatus;