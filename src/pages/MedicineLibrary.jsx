import React, { useState } from 'react'
import { CiImageOn } from 'react-icons/ci';
import { FiPlus } from 'react-icons/fi';
import { IoSearchOutline } from 'react-icons/io5';
import { LuFilter } from 'react-icons/lu';
import { PiPill } from 'react-icons/pi';
import { Link } from 'react-router';

const MedicineLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  return (
    <div className="space-y-6 animate-in fade-in duration-500">

      {/* --------------------Header-------------------- */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Medicine Library
          </h1>
          <p className="text-gray-500 mt-1">
            Manage and view all medicines in stock
          </p>
        </div>
      </div>

      {/* --------------------Filters & Search-------------------- */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-4 items-center">

        {/* --------------------Search-------------------- */}
        <div className="relative flex-1 w-full">
          <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by medicine or supplier..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
          />
        </div>

        {/* --------------Filter-------------- */}
        <div className="relative w-full sm:w-auto">
          <LuFilter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full sm:w-48 pl-10 pr-8 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-primary appearance-none bg-white text-gray-700 font-medium"
          >
            <option value="all">All Items</option>
            <option value="in_stock">In Stock</option>
            <option value="out_of_stock">Out of Stock</option>
          </select>
        </div>

      </div>

      {/* --------------Cards (UI only placeholder)-------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {/* --------------Card-------------- */}
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1 cursor-pointer">
          
          <div className="h-32 bg-gray-50 flex items-center justify-center border-b border-gray-200">
            <CiImageOn className="w-12 h-12 opacity-50" />
          </div>

          <div className="p-5 space-y-3">
            <h3 className="text-lg font-bold text-gray-800 truncate">
              Medicine Name
            </h3>
            <p className="text-sm text-gray-500">
              Supplier Name
            </p>

            <div className="flex items-end justify-between">
              <div>
                <span className="text-xs text-gray-400 uppercase block mb-1">
                  Stock
                </span>
                <span className="text-lg font-bold text-green-600">
                  00 units
                </span>
              </div>

              <div className="text-right">
                <span className="text-xs text-gray-400 uppercase block mb-1">
                  Price
                </span>
                <span className="text-lg font-bold text-gray-800">
                  $00.00
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ----------Empty State UI---------- */}
      <div className="text-center py-12 text-gray-500">
        <PiPill className="w-16 h-16 mx-auto mb-4 text-gray-300" />
        <p className="text-xl font-medium">No medicines found</p>
        <p>Try adjusting your search or filters.</p>
      </div>

      <Link to='/addtoLibrary' className=" inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-semibold shadow-sm hover:bg-primary/90 transition active:scale-95">
      <FiPlus className="w-5 h-5" />
      Add Medicine </Link>
          
    </div>
  );
}

export default MedicineLibrary
