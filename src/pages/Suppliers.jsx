import React from 'react'
import { CiDeliveryTruck } from 'react-icons/ci'
import CommonHead from '../components/CommonHead'

const Suppliers = () => {
  return (
    <>
      <div className="space-y-6 animate-in fade-in duration-500 h-full flex flex-col">

        <CommonHead 
          page_name={'Suppliers'}
          sub_titel={'Manage vendor contacts and track performance'}
        />
        {/* Main Layout */}
        <div className="flex-1 overflow-hidden grid grid-cols-1 lg:grid-cols-3 gap-8 pb-4">

          {/* ---------------------Left--------------------- */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col overflow-hidden h-[calc(100vh-200px)]">

            {/* ---------------------Top--------------------- */}
            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between ">
              <h2 className="font-bold text-gray-800">
                Supplier Directory
              </h2>

              <span className="bg-green-100 text-primary text-xs font-bold px-2 py-1 rounded-full">
                00 Total
              </span>
            </div>

            {/* ---------------------Search--------------------- */}
            <div className="p-4 border-b border-gray-100">
              <input
                type="text"
                placeholder="Search supplier..."
                className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* ------------List------------ */}
            <div className="flex-1 overflow-y-auto">
              <ul className="divide-y divide-gray-100">

                {/* Item */}
                <li className="px-6 py-4 cursor-pointer border-l-4 border-primary bg-green-50 hover:bg-gray-50 transition">
                  <div className="flex items-center gap-3">

                    <div className="p-2 rounded-lg bg-primary text-white ">
                      <CiDeliveryTruck className='w-6 h-6'/>
                    </div>

                    <div>
                      <h3 className="font-bold text-primary">
                        Supplier Name
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        +8801XXXXXXXXX
                      </p>
                    </div>

                  </div>
                </li>

              </ul>
            </div>

          </div>

          {/* Right Side */}
          <div className="lg:col-span-2 flex flex-col space-y-6 overflow-hidden h-[calc(100vh-200px)]">

            {/* ----------Cards---------- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                <p className="text-sm text-gray-500">Total Supplied</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-2">000</h3>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                <p className="text-sm text-gray-500">Value Sold</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-2">$000</h3>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                <p className="text-sm text-gray-500">Average Price</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-2">$00</h3>
              </div>

            </div>

            {/* --------------Products Table-------------- */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex-1 flex flex-col overflow-hidden">

              <div className="px-6 py-5 border-b border-gray-100 bg-gray-50">
                <h2 className="font-bold text-gray-800">
                  Products from Supplier Name
                </h2>
              </div>

              <div className="flex-1 overflow-auto">
                <table className="w-full text-left">

                  <thead className="sticky top-0 bg-white z-10 shadow-sm">
                    <tr className="text-gray-500 text-sm uppercase tracking-wider">

                      <th className="px-6 py-4 font-medium">Medicine Name</th>
                      <th className="px-6 py-4 font-medium">Current Stock</th>
                      <th className="px-6 py-4 font-medium">Price</th>

                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-100">

                    <tr className="hover:bg-gray-50 transition">

                      <td className="px-6 py-4 font-semibold text-gray-800">
                        Napa Extra
                      </td>

                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                          50 units
                        </span>
                      </td>

                      <td className="px-6 py-4 font-semibold text-gray-800">
                        $12
                      </td>

                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Suppliers
