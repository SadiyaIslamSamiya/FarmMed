import React from 'react'
import CommonHead from '../components/CommonHead'
import { FaRegFileLines } from 'react-icons/fa6'
import { MdErrorOutline } from 'react-icons/md'

const Sales = () => {
  return (
    <>
      <div className="space-y-6 mx-auto pb-10 animate-in fade-in duration-500">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

          <CommonHead 
            page_name={'Sales & Receipt'}
            sub_titel={'Manage transactions, generate bills, and update inventory instantly'}
          />
          {/* Info Card */}
          <div className="flex items-center gap-4 bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100 ">

            <div className="bg-primary/10 p-2.5 rounded-xl">
              <FaRegFileLines className='w-6 h-6 text-primary'/>
            </div>

            <div>
              <p className="text-[11px] uppercase font-bold text-gray-400 tracking-wider">
                Receipt No.
              </p>
              <p className="text-sm font-black text-gray-800">
                RCPT-1001
              </p>
            </div>

            <div className="h-10 w-px bg-gray-100"></div>

            <div className="text-right">
              <p className="text-[11px] uppercase font-bold text-gray-400 tracking-wider">
                Date & Time
              </p>
              <p className="text-sm font-black text-gray-800">
                10:45 AM
              </p>
            </div>

          </div>

        </div>

        {/* ___________Main Layout___________ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* ---------LEFT PANEL--------- */}
          <div className="lg:col-span-3 bg-white rounded-3xl shadow-sm border border-gray-100 p-6 space-y-5 relative overflow-hidden h-full">

            <div className="absolute top-0 left-0 w-full h-1 bg-gray-100"></div>

            <h2 className="text-lg font-bold text-gray-800">
              Add Sale Item
            </h2>

            {/* Search */}
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
                Search Medicine
              </label>

              <input
                type="text"
                placeholder="Search medicine..."
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Selected Box */}
            <div className="p-4 rounded-2xl border border-dashed border-gray-200 bg-gray-50 text-center">
              
              <div className="space-y-1.5 animate-in fade-in zoom-in-95 duration-300">
                  <div className="flex items-start justify-between">
                     <p className="text-sm font-bold text-primary leading-tight">name</p>
                     <span className="text-xs font-black bg-white px-2 py-1 rounded-md shadow-sm border border-primary/10 text-gray-700">
                       $ price
                     </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-primary/10">
                    <span className="font-semibold uppercase tracking-wider text-[10px]">Current Stock</span>
                    <span className="font-black text-gray-700">stock Units</span>
                  </div>
                </div>
              {/* not selected */}
              <p className="text-xs font-bold text-gray-400 uppercase">
                No medicine selected
              </p>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-2 gap-4">

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
                  Quantity
                </label>

                <input
                  type="number"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
                  Price
                </label>

                <input
                  type="number"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

            </div>
            <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-xs font-bold border border-red-100 flex items-center animate-in fade-in slide-in-from-top-1">
                <MdErrorOutline className="w-6 h-6 mr-2" />
                Out of Stock
              </div>
            {/* Button */}
            <button className="w-full py-3.5 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition">
              + Add To Receipt
            </button>

          </div>

          {/* --------------MIDDLE PANEL-------------- */}
          <div className="lg:col-span-6 bg-white rounded-3xl shadow-sm border border-gray-100 min-h-[500px] overflow-hidden flex flex-col h-full">

            <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h2 className="text-lg font-bold text-gray-800">
                Receipt Items
              </h2>

              <span className="bg-white border border-gray-200 px-3 py-1 rounded-lg text-xs font-bold text-gray-600">
                0 Items
              </span>
            </div>

            {/* Table */}
            <div className="flex-1 overflow-auto">

              <table className="w-full text-left">

                <thead className="bg-gray-50 sticky top-0">
                  <tr className="text-[11px] uppercase text-gray-400 font-black">

                    <th className="px-5 py-4">Medicine</th>
                    <th className="px-5 py-4 text-center">Qty</th>
                    <th className="px-5 py-4 text-right">Price</th>
                    <th className="px-5 py-4 text-right">Total</th>
                    <th className="px-5 py-4 text-center">Act</th>

                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td colSpan="5" className="text-center py-24 text-gray-400">
                      No items added yet
                    </td>
                  </tr>
                </tbody>

              </table>

            </div>

          </div>

          {/* -----------RIGHT PANEL----------- */}
          <div className="lg:col-span-3 bg-white rounded-3xl shadow-sm border border-gray-100 p-6 space-y-5 relative overflow-hidden">

            <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-primary to-green-500"></div>

            <h2 className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-3">
              Payment Summary
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span className="text-sm font-bold text-gray-500">
                  Subtotal
                </span>
                <span className="font-black text-gray-800">
                  $0.00
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-gray-500">
                  Discount
                </span>

                <input
                  type="number"
                  className="w-24 px-3 py-1.5 text-right bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-400"
                  placeholder='0'
                />
              </div>

              <div className="bg-primary/5 border border-primary/10 p-4 rounded-2xl flex justify-between">
                <span className="text-sm font-extrabold text-primary uppercase">
                  Grand Total
                </span>
                <span className="text-2xl font-extrabold text-primary">
                  $0.00
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
                  Paid Amount
                </label>

                <input
                  type="number"
                  className="w-full px-4 py-4 text-right bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-300" placeholder='0'
                />
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 flex justify-between">
                <span className="text-xs font-bold uppercase text-gray-500">
                  Change Return
                </span>
                <span className="text-xl font-black text-gray-400">
                  $0.00
                </span>
              </div>

            </div>

            {/* Buttons */}
            <div className="space-y-3 pt-4">

              <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition">
                Save Sale
              </button>

              <button className="w-full py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-2xl font-bold hover:bg-gray-800 hover:text-white transition">
                Print Receipt
              </button>

            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default Sales
