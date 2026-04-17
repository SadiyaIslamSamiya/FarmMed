import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { MdFileUpload } from 'react-icons/md'

const AddToLibrary = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">

      {/* -------------------Header------------------- */}
      <div className="flex items-center justify-between">
        

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Add Medicine
          </h1>
          <p className="text-gray-500 mt-1">
            Add a new medicine to your library
          </p>
        </div>

      </div>

      {/* -------------------Form Card------------------- */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-6">

        {/* -------------------Image Upload------------------- */}
        <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-primary transition cursor-pointer">
          <MdFileUpload className="w-10 h-10 text-gray-400 mb-3" />
          <p className="text-gray-600 font-medium">
            Upload Medicine Image
          </p>
          <p className="text-sm text-gray-400">
            PNG, JPG up to 5MB
          </p>
        </div>

        {/* -------------------Form Fields------------------- */}
        <div className="grid grid-cols-3 gap-6">

          {/* Medicine Name */}
          <div className="space-y-2 flex flex-col">
            <label className="text-sm font-medium text-gray-600">
              Medicine Name
            </label>
            <input
              type="text"
              placeholder="Enter medicine name"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-primary"
            />
          </div>


          {/* Stock */}
          <div className="space-y-2 flex flex-col">
            <label className="text-sm font-medium text-gray-600">
              Stock Quantity
            </label>
            <input
              type="number"
              placeholder="Enter stock"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Price */}
          <div className="space-y-2  flex flex-col">
            <label className="text-sm font-medium text-gray-600 ">
              Price ($)
            </label>
            <input
              type="number"
              placeholder="Enter price"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Supplier */}
          <div className="space-y-2 flex flex-col">
            <label className="text-sm font-medium text-gray-600">
              Supplier
            </label>
            <input
              type="text"
              placeholder="Enter supplier name"
              required
              className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Supplier Number*/}
          <div className="space-y-2 flex flex-col">
            <label className="text-sm font-medium text-gray-600">
              Supplier Mobile Number
            </label>
            <input
              type="number"
              placeholder="Enter Mobile Number"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 pt-4">

          <button
            className="px-5 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition active:scale-95"
          >
            Save Medicine
          </button>
        </div>
      </div>

    </div>
  )
}

export default AddToLibrary
