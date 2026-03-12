import React, { useState } from 'react';
import dateImg from '../../assets/Vector-date-box.jpg'
import { toast } from 'react-toastify';

const Ticket = ({ ticket ,selectedTicket, setSelectedTicket,removeTicket}) => {
    // console.log(ticket)
    const { title, status, description, id, priority, customer, created_date } = ticket;
    const [isSelected, setIsSelected] = useState(false)

//    removeTicket(ticket)

    const handleSelected = (TicketsData) => {
        setIsSelected(true)
        toast('Ticket added successfully')
setSelectedTicket([...selectedTicket, TicketsData])
    }
    return (
        <div onClick={() => {handleSelected(ticket)}} className='max-w-[1200px] mx-auto border-2 mb-3 border-gray-200 rounded-xl p-4'>
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
                    <span className='text-gray-500 font-semibold'>{customer}</span>
                    <span className='flex gap3 items-center'>
                        <span className='mr-1'><img src={dateImg} alt="" /></span>{created_date}<span></span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Ticket;