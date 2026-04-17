import React from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { FiAlertTriangle } from 'react-icons/fi'
import { IoMdCalendar } from 'react-icons/io'
import { PiPillDuotone } from 'react-icons/pi'
import CommonHead from '../components/CommonHead'
const Dashboard = () => {
  return (
    <>
      <div className="space-y-8 animate-in fade-in duration-500">
      
        {/* ----------------Header---------------- */}
        
        <CommonHead 
          page_name={'Dashboard'}
          sub_titel={'Overview of your pharmacy performance'}
        />

        {/* ----------------Stats Cards---------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* ----------------Card 1----------------*/}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500 font-medium">Total Medicines</h3>
              <div className="bg-green-100 p-2 rounded-lg">
                <PiPillDuotone className="w-7 h-7 text-green-700" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-800">000</div>
            <p className="text-sm text-gray-500 mt-2">
              Units currently in stock
            </p>
          </div>

          {/* ---------------Card 2---------------*/}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500 font-medium">Today's Sales</h3>
              <div className="bg-yellow-100 p-2 rounded-lg">
                <IoMdCalendar className="w-7 h-7 text-yellow-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-800">$000</div>
            <p className="text-sm text-green-600 font-medium mt-2">
              +0% from yesterday
            </p>
          </div>

          {/* ---------------Card 3---------------*/}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500 font-medium">Month's Sales</h3>
              <div className="bg-blue-100 p-2 rounded-lg">
                <FaRegCalendarAlt className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-800">$000</div>
            <p className="text-sm text-green-600 font-medium mt-2">
              +0% from last month
            </p>
          </div>

          {/* ---------------Card 4---------------*/}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500 font-medium">Low Stock Alert</h3>
              <div className="bg-red-100 p-2 rounded-lg">
                <FiAlertTriangle className="w-6 h-6 text-red-600" />
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-800">00</div>
            <p className="text-sm text-red-500 font-medium mt-2">
              Items need reordering
            </p>
          </div>

        </div>

        {/* --------Table-------- */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          
          <div className="px-6 py-5 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-800">
              Top Suppliers by Volume
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              
              <thead>
                <tr className="bg-gray-50 text-gray-500 text-sm uppercase tracking-wider">
                  <th className="px-6 py-4">Rank</th>
                  <th className="px-6 py-4">Supplier Name</th>
                  <th className="px-6 py-4 text-right">Products</th>
                  <th className="px-6 py-4 text-right">Value</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                
                {/* ----------Row---------- */}
                <tr className="hover:bg-gray-50 transition group cursor-pointer">
                  <td className="px-6 py-4 font-medium">#1</td>
                  <td className="px-6 py-4 font-semibold text-primary group-hover:underline">
                    Supplier Name
                  </td>
                  <td className="px-6 py-4 text-right text-gray-600">
                    000 items
                  </td>
                  <td className="px-6 py-4 text-right font-medium">
                    $000
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

        </div>
      </div>
    </>
  )
}

export default Dashboard
