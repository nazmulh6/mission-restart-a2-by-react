
import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import CustomerTickets from './components/CustomerTickets/CustomerTickets'

const fetchCustomerTickets = async ()=>{
  const res = await fetch('/customerTickets.json');
  return res.json()
}
const customerTicketsPromise = fetchCustomerTickets();
function App() {
  

  return (
    <>
      
        <Navbar></Navbar>
      <Banner></Banner>
  <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
    <CustomerTickets 
    customerTicketsPromise={customerTicketsPromise}
    ></CustomerTickets>
  </Suspense>
      
      
    </>
  )
}

export default App
