import React from 'react';
import TaskResolved from './TaskResolved/TaskResolved';

const ResolveSection = ({completedTicket}) => {
    return (
        <div>
            <h1 className='font-bold text-2xl mb-2'>Resolved Task</h1>
            {
            completedTicket.map(ticket=><TaskResolved 
           ticket={ticket}
            ></TaskResolved>)
            }
        </div>
    );
};

export default ResolveSection;