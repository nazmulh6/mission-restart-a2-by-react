import React from 'react';
import fbImg from '../../assets/facebook.jpg'
import xImg from '../../assets/x.jpg'
import linImg from '../../assets/linkedin.jpg'
import msImg from '../../assets/message-.jpg'

const Footer = () => {
    return (
        <div>
             <div className='bg-black'>
            <footer className='max-w-[1200px] mx-auto p-10'>
                {/* <div className='flex justify-center'><img src={footerImg} alt="" /></div> */}

               <div className='grid grid-cols-1 md:grid-cols-5 gap-5'>

<div>
    <h2 className='text-white text-lg mb-2'>CS — Ticket System</h2>
    <p className='text-gray-500'>CS-Ticket System helps support teams manage customer issues quickly and efficiently by tracking tickets and organizing tasks in one simple platform.</p>
</div>
<div>
    <h2 className='text-white text-lg mb-2'>Company</h2>
    <ul className='text-gray-500 gap-8'>
        <li><a href=''>About</a></li>
        <li><a href="">Our Mission</a></li>
        <li><a href="">Contact Saled</a></li>
    </ul>
</div>
<div>
    <h2 className='text-white text-lg mb-2'>Services</h2>
    <ul className='text-gray-500'>
        <li><a href="">Products & Services</a></li>
        <li><a href="">Customer Stories</a></li>
        <li><a href="">Download Apps</a></li>
    </ul>
</div>
<div>
    <h2 className='text-white text-lg mb-2'>Information</h2>
    <ul className='text-gray-500'>
        <li><a href="">Privacy Policy</a></li>
        <li><a href="">Terms & Conditions</a></li>
        <li><a href="">Join Us</a></li>
    </ul>
</div>
<div>
    <h2 className='text-white text-lg mb-2'>Social Links</h2>
    <ul className='text-gray-500'>
        <li className='flex items-center'><img className='rounded-2xl mr-1' src={xImg} alt="" /><a href=""> @CS — Ticket System</a></li>
        <li  className='flex items-center'><img className='  rounded-2xl mr-1' src={fbImg} alt="" /><a href="">@CS — Ticket System</a></li>
        <li  className='flex items-center'><img className='rounded-2xl mr-1' src={linImg} alt="" /><a href="">@CS — Ticket System</a></li>
        <li  className='flex items-center'><img className='rounded-2xl mr-1 w-[22px] h-[22px]' src={msImg} alt="" /><a href="">support@cst.com</a></li>
    </ul>
</div>




               </div>

                <div className='border-t border-t-blue-50 mt-3 p-4'>
                    <p className=' flex justify-center items-center text-gray-400 '>© 2025 CS — Ticket System. All rights reserved.</p>
                </div>

            </footer>
        </div>
        </div>
    );
};

export default Footer;