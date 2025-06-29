// import React from 'react'

// const Navbar = () => {
//     return (
//         <nav className='bg-slate-800 text-white '>
//             <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

//                 <div className="logo font-bold text-white text-2xl">
//                     <span className='text-green-500'> &lt;</span>
//                     <span>Pass</span><span className='text-green-500'>OP/&gt;</span>
//                 </div>
//                 {/* <ul>
//                     <li className='flex gap-4 '>
//                         <a className='hover:font-bold' href='/'>Home</a>
//                         <a className='hover:font-bold' href='#'>About</a>
//                         <a className='hover:font-bold' href='#'>Contact</a>
//                     </li>
//                 </ul> */}
//                 <button className='text-white bg-green-700 my-5 mx-2 rounded-full flex  justify-between items-center ring-white ring-1'>
//                     <img className='invert  w-10 p-1' src="/icons/github.svg" alt="github logo" />
//                     <span className='font-bold px-2'>GitHub</span>

//                 </button>
//             </div>
//         </nav>
//     )
// }

// export default Navbar

// Example: src/components/Navbar.jsx
import { useAuth } from "../AuthContext";

const Navbar = () => {
    const { user, login, logout } = useAuth();

    return (
        <div className="flex justify-between p-4 bg-green-200">
            <h1 className="font-bold text-xl">PassOP</h1>
            <div>
                {user ? (
                    <div className="flex items-center gap-4">
                        <img src={user.photoURL} alt="Profile" className="w-8 h-8 rounded-full" />
                        <span>{user.displayName}</span>
                        <button
                            onClick={logout}
                            className="text-sm px-4 py-1 bg-red-500 hover:bg-red-600 text-white rounded-full"
                        >
                            🚪 Log Out
                        </button>
                    </div>
                ) : (
                    <button onClick={login} className="bg-green-500 px-3 py-1 rounded text-white">Login with Google</button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
