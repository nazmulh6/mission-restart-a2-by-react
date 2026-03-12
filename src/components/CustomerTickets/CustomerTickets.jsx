import React, { use } from 'react';
import Ticket from '../Ticket/Ticket';

const CustomerTickets = ({ customerTicketsPromise, selectedTicket, setSelectedTicket, removeTicket }) => {
    // console.log(customerTicketsPromise)
    const TicketsData = use(customerTicketsPromise)
    return (
        <section className='tickets-container max-w-[1200px] mx-auto my-10'>
            <h1 className='font-bold text-2xl mb-2'>Customer Tickets</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

                {
                    TicketsData.map(ticket => <Ticket
                        ticket={ticket}
                        selectedTicket={selectedTicket}
                        setSelectedTicket={setSelectedTicket}
                        removeTicket={removeTicket}
                    ></Ticket>)
                }
            </div>
        </section>
    );
};

export default CustomerTickets;