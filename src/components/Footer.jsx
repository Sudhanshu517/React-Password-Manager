import React from 'react'

const Footer = () => {
  return (
    <div className="bg-black py-1">
      <div className="text-xl font-bold text-center text-white">
        <span className="text-green-500">&lt;</span>
        <span>Pass</span>
        <span className="text-green-500">OP/&gt;</span>
      </div>
      <div className="flex justify-center items-center font-bold text-white">
        Created with <span>   <img className="w-5 mx-1.5" src="./icons/love.svg" alt="" /></span>
        by Sudhanshu
      </div>
    </div>
  )
}

export default Footer
