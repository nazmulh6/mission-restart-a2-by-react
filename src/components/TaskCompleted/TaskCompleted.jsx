import React, { useState } from 'react';
import { toast } from 'react-toastify';

const TaskCompleted = ({ ticket,removeTicket, completedTicket, setCompletedTicket}) => {
    // console.log(ticket)
    
    const handleRemove=()=>{
        // handleDelete();
        removeTicket(ticket )
        toast('Task completed')

    }
    const [isClicked, setIsClicked]=useState(false)
    const handleClickedCompleted =(TicketsData)=>{
setIsClicked(true)
setCompletedTicket([...completedTicket, TicketsData])
    }
    return (
        <div>

            <div className='border border-gray-100 p-0 md:p-2 rounded-xl'>
                <h2 className='font-semibold'>{ticket.title}</h2>
                <button onClick={()=>{
                    handleRemove(); handleClickedCompleted(ticket);
                }} className='btn btn-accent mt-2  px-2 md:px-20'>Completed</button>
            </div>

        </div>
    );
};

export default TaskCompleted;