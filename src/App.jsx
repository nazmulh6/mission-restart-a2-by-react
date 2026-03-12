
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import CustomerTickets from './components/CustomerTickets/CustomerTickets'
import TaskStatus from './components/TaskStatus/TaskStatus'
import ResolveSection from './components/ResolveSection/ResolveSection'
import { ToastContainer } from 'react-toastify';


const fetchCustomerTickets = async () => {
  const res = await fetch('/customerTickets.json');
  return res.json()
}
const customerTicketsPromise = fetchCustomerTickets();
function App() {
  const [selectedTicket, setSelectedTicket] = useState([])
  const [completedTicket, setCompletedTicket] = useState([])
  // console.log(selectedTicket)

  const removeTicket = (t) => {
    const filteredData = selectedTicket.filter(tic => tic.id !== t.id);
    setSelectedTicket(filteredData)
  }

  return (
    <>

      <Navbar></Navbar>
      <Banner selectedTicket={selectedTicket}
      completedTicket={completedTicket}
      ></Banner>
      <section className='flex max-w-[1200px] mx-auto my-10  gap-2 justify-between'>
        <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
          <CustomerTickets
            customerTicketsPromise={customerTicketsPromise}
            selectedTicket={selectedTicket}
            setSelectedTicket={setSelectedTicket}
            removeTicket={removeTicket}
          ></CustomerTickets>
        </Suspense>
        <div className='my-10'>
          <h1 className='font-bold text-2xl mb-2'>Task Status</h1>
          <div className='border border-gray-200 p-4 rounded-xl'>
            <Suspense>

              <TaskStatus
                selectedTicket={selectedTicket}
                removeTicket={removeTicket}
                completedTicket={completedTicket}
                setCompletedTicket={setCompletedTicket}
              ></TaskStatus>
            </Suspense>
            <Suspense>
              <ResolveSection
                completedTicket={completedTicket}
              ></ResolveSection>
            </Suspense>
          </div>
        </div>
      </section>

      <ToastContainer />
    </>
  )
}

export default App
