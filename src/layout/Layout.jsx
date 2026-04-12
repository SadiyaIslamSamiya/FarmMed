import React from 'react'
import logo from '../assets/logo.png'
import { Link, NavLink, Outlet } from 'react-router'
import { GiPill } from 'react-icons/gi'
import { RiDashboardLine } from 'react-icons/ri'
import { CiDeliveryTruck } from 'react-icons/ci'
import { BsCartCheck } from 'react-icons/bs'
const Layout = () => {
  
  const currentDateTime = new Date().toLocaleString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    // year: '2-digit',
    hour: 'numeric',
    minute: '2-digit'
  })
  
  return (
    <>
      <div className="h-screen bg-gray-50 grid grid-cols-6 font-Poppins">
        {/* ---------------side navber--------------- */}
        <aside className=' bg-white border-r border-gray-200 flax flex-col'>
          <div className=" h-18 flex items-center border-b border-gray-200 px-4">
            <img src={logo} alt="logo" className=' w-20'/>
            <h1 className=' font-bold text-[24px] text-primary'>FarmMed</h1>
          </div>
          <nav className=' py-6 px-4'>
            <ul className=''>

              <li><NavLink to='/' className={({ isActive }) =>
                `flex items-center px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-[#F5F5F5] hover:text-primary'
                }`
              }> 
                <RiDashboardLine className='w-7 h-7 mr-2' />
                 <span className='font-Poppins text-xl font-semibold'>Dashboard</span></NavLink>
              </li>
              {/* ------------page-2 Medicine------------ */}
              <li><NavLink to='/medicineLibrary' className={({ isActive }) =>
                `flex items-center px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-[#F5F5F5] hover:text-primary'
                }`
              }> 
                <GiPill className='w-7 h-7 mr-2' />
                 <span className='font-Poppins text-xl font-semibold' >Medicine Library</span>
              </NavLink>
              </li>
              {/* ------------page-3 Medicine------------ */}
              <li><NavLink to='sales' className={({ isActive }) =>
                `flex items-center px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-[#F5F5F5] hover:text-primary'
                }`
              }> 
                <BsCartCheck className='w-7 h-7 mr-2'/>
                <span className='font-Poppins text-xl font-semibold' >Sales</span> 
                </NavLink>
              </li>
              {/* ------------page-4 Medicine------------ */}
              <li><NavLink to='/suppliers' className={({ isActive }) =>
                `flex items-center px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-[#F5F5F5] hover:text-primary'
                }`
              }> 
                <CiDeliveryTruck className='w-8 h-8 mr-2'/>
                <span className='font-Poppins text-xl font-semibold' >Suppliers</span> 
                </NavLink>
              </li>
            </ul>
          </nav>
        </aside>
        {/* ----------------------Main contain---------------------- */}
        <div className=" col-span-5">
          <header className='h-18 flex justify-between items-center bg-white border-b border-gray-200 px-6'>
            <h1 className='font-semibold text-[24px] text-gray-800'>Inventory System</h1>
            <p className='text-gray-600'>{currentDateTime}</p>
          </header>
          <div className="p-8">
            <Outlet/>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Layout
