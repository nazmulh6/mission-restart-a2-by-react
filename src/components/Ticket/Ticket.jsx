import React from 'react';
import dateImg from '../../assets/Vector-date-box.jpg'

const Ticket = ({ticket}) => {
    console.log(ticket)
    const {title,status,description,id,priority,customer,created_date}=ticket;
    return (
        <div className='max-w-[1200px] mx-auto border-2 mb-3 border-gray-200 rounded-xl p-4'>
            <div className='flex justify-between'>
                <h2 className='font-bold'>{title}</h2>
                <button className='btn btn-success rounded-2xl'>{status}</button>
            </div>
            <p className='text-gray-400'>{description}</p>
            <div className="last-line flex justify-between">
                <div className='flex gap-3'>
                    <span>{id}</span>
                    <span>{priority}</span>
                </div>
                <div className='flex gap-3'>
                    <span>{customer}</span>
                    <span className='flex gap3 items-center'>
                        <span className='mr-1'><img src={dateImg} alt="" /></span>{created_date}<span></span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Ticket;