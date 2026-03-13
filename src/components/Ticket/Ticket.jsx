import React, { useState } from 'react';
import dateImg from '../../assets/Vector-date-box.jpg'
import { toast } from 'react-toastify';


const Ticket = ({ ticket, selectedTicket, setSelectedTicket }) => {
    // console.log(ticket)
    const { title, status, description, id, priority, customer, created_date } = ticket;
    const [isSelected, setIsSelected] = useState(false)



    const handleSelected = (TicketsData) => {
        setIsSelected(true)
        toast('Ticket added successfully')
        setSelectedTicket([...selectedTicket, TicketsData])
    }
    return (
        <>
            <div onClick={() => { handleSelected(ticket) }} className='max-w-[1200px] mx-auto border-2 mb-1 border-gray-200 rounded-xl p-2 md:p-4'>
                <div className='md:flex justify-between'>
                    <h2 className='font-bold'>{title}</h2>
                    <button className={`btn rounded-2xl
                    ${status === "Open"
                        ?"btn-accent"
                        :"btn-warning"
                    }
                    `}>{status}</button>
                </div>
                <p className='text-gray-400'>{description}</p>
                <div className="last-line  md:flex justify-between">
                    <div className='flex gap-3'>
                        <span>{id}</span>
                        <span className={`font-semibold ${
    priority === "HIGH PRIORITY"
      ? "text-red-500"
      : priority === "MEDIUM PRIORITY"
      ? "text-yellow-500"
      : "text-green-500"
  }`}>{priority}</span>
                    </div>
                    <div className='flex gap-3'>
                        <span className='text-gray-500 font-semibold'>{customer}</span>
                        <span className='flex gap3 items-center'>
                            <span className='mr-1'><img src={dateImg} alt="" /></span>{created_date}<span></span>
                        </span>
                    </div>
                </div>
            </div>
            {/* <TaskCompleted handleDelete={handleDelete}></TaskCompleted> */}

        </>

    );
};

export default Ticket;