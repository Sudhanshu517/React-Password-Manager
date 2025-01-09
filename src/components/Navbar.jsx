import React from 'react'


const Navbar = () => {
  return (
    <div className=" font-serif bg-black text-white">
      <nav className="flex justify-between w-3/4  mx-auto px-2"> 
        <div className="font-bold text-xl py-3">
        <span className='text-green-500'> &lt;</span>

<span>Pass</span><span className='text-green-500'>OP/&gt;</span>
        </div>
        
        <div className="py-1">
          <button className="bg-green-700 pr-4 py-1 mt-[0.7px] flex justify-center items-center rounded-full"> 
            <img className="invert w-16 py-0" src="./icons/github.png" alt="" /><span>Github</span>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
