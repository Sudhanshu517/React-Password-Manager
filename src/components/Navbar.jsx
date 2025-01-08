import React from 'react'


const Navbar = () => {
  return (
    <div className=" font-serif bg-black text-white">
      <nav className="flex justify-between w-3/4 py-5 mx-auto px-2"> 
        <div className="font-bold text-xl">
        <span className='text-green-500'> &lt;</span>

<span>Pass</span><span className='text-green-500'>OP/&gt;</span>
        </div>
        <div>
            <ul className="flex gap-3" >
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
