import React from 'react';
import { toast } from 'react-toastify';

const TaskCompleted = ({ ticket,removeTicket }) => {
    console.log(ticket)
    const handleRemove=()=>{
        removeTicket(toast('task completed'))
    }
    return (
        <div>

            <div className='border border-gray-100 p-2 rounded-xl'>
                <h2 className='font-semibold'>{ticket.title}</h2>
                <button onClick={handleRemove} className='btn btn-success mt-2'>Completed</button>
            </div>

        </div>
    );
};

export default TaskCompleted;