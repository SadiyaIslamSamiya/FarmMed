import React from 'react'

const CommonHead = ({page_name, sub_titel}) => {
  return (
    <div>
        <h1 className="text-3xl font-bold text-gray-800">{page_name}</h1>
        <p className="text-gray-500 mt-1"> {sub_titel} </p>
    </div>
  )
}

export default CommonHead
