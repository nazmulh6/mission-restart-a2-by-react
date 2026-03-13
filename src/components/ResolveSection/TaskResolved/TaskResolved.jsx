import React from 'react';

const TaskResolved = ({ticket}) => {
    return (
        <div>
            
            <div className='border border-gray-100 p-2 rounded-xl mb-1 bg-sky-200'>
                <h2 className='font-semibold'>{ticket.title}</h2>
                
            </div>
        </div>
    );
};

export default TaskResolved;