import React from 'react';

const TaskResolved = ({ticket}) => {
    return (
        <div>
            
            <div className='border border-gray-100 p-2 rounded-xl'>
                <h2 className='font-semibold'>{ticket.title}</h2>
                
            </div>
        </div>
    );
};

export default TaskResolved;