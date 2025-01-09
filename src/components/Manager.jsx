import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify';



const Manager = () => {
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwords, setPasswords] = useState([])
  // const [passwordArray, setPasswordArray] = useState([]);
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords")
    if (passwords) {
      setPasswordArray(JSON.parse(passwords))
    }
    else {
      setPasswordArray([]);
    } // Ensure passwordArray is initialized as an array 

  }, [])

  const ref = useRef()
  const passwordRef = useRef()

  const showPassword = () => {
    //   console.log(ref.current.src)
    console.log()
    if (ref.current.src.includes("icons/show.svg")) {
      ref.current.src = ref.current.src.replace("icons/show.svg", "./icons/hide.svg")
      passwordRef.current.type = "password"
    }
    else {
      ref.current.src = ref.current.src.replace("icons/hide.svg", "icons/show.svg")
      passwordRef.current.type = "text"
    }
  }

  const handleChange = (e) => {
    // console.log("I worked...")
    setform({ ...form, [e.target.name]: e.target.value })
  }



  const savePassword = () => {
    console.log(form);

    // console.log("passwordArray before update:", passwordArray);

    setPasswordArray([...passwordArray, form]);

    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log([...passwordArray, form]);
  };


const copyText = (text) =>{
  toast('Copied to clipboard!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    });
  navigator.clipboard.writeText(text)

}





  return (
    
    <div>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>
      <div className="absolute inset-0 -z-10 h-full w-96 bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>


      <div className=" mx-auto mycontainer pb-5 flex-col text-center flex gap-4" >
        <h1 className=" font-bold text-3xl text-center">
          <span className="text-green-500">&lt;</span>
          <span>Pass</span>
          <span className="text-green-500">OP/&gt;</span>
        </h1>
        <p>Your own Password Manager</p>

        <input name="site" value={form.site} onChange={handleChange} placeholder="Enter website URL" className={`w-full rounded-full mx-auto py-1.5 px-2 border border-green-500`} type="text" />



        <div className="flex justify-between gap-5">
          <input name="username" value={form.username} onChange={handleChange} placeholder="Enter Username" className=" w-full rounded-full py-1.5 px-2 border border-green-500" type="text" />
          <div className="relative">

            <input ref={passwordRef} name="password" value={form.password} onChange={handleChange} placeholder="Enter Password" className=" w-full rounded-full py-1.5 px-2 border border-green-500" type="password" />
            <span className="absolute top-1.5 right-1" onClick={showPassword}  >
              <img ref={ref} width={25} src="./icons/hide.svg" alt="" />
            </span>
          </div>
        </div>
        <button onClick={savePassword} className="text-center flex justify-center bg-green-500 hover:bg-green-400 px-4 py-2 rounded-full items-center mx-auto border">

          <lord-icon
            src="https://cdn.lordicon.com/jgnvfzqg.json"
            trigger="hover" >
          </lord-icon>
          <span className="font-bold py-1 px-4 ">Add Password</span>

        </button>
      </div>
      <h2 className="text-center font-bold text-2xl mb-2">Your Passwords</h2>
      <div className="flex justify-center text-center container m-auto">
        {passwordArray.length == 0 && <div>No passwords to display</div>}
        {passwordArray.length != 0 &&
          <table className="table-auto mx-auto border rounded-md overflow-hidden">
            <thead className="bg-green-600">
              <tr >
                <th className="py-2">Site</th>
                <th className="py-2">Username</th>
                <th className="py-2">Password</th>
              </tr>
            </thead>
            <tbody className="bg-green-100">
              {passwordArray.map((item, index) => {

                return <tr key={index} >
                  <td className="text-center w-80 py-2 border border-white ">
                    <div className="flex justify-center items-center">
                      <div>
                        <a href={item.site} target="_blank">{item.site}</a>

                      </div>
                      <div className="hover:cursor-pointer" onClick={()=>{copyText(item.site)}}>

                        <lord-icon
                          style={{ width: "25px", paddingTop: "2px", paddingLeft: "6px", cursor: "pointer", }}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover" >
                        </lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className="text-center w-80 py-2 border border-white">
                    <div className="flex justify-center items-center">

                      <span>{item.username}</span>
                      <div className="hover:cursor-pointer" onClick={()=>{copyText(item.username)}}>

                        <lord-icon
                          style={{ width: "25px", paddingTop: "2px", paddingLeft: "6px", cursor: "pointer", }}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover" >
                        </lord-icon>
                      </div>

                    </div>

                  </td>
                  <td className="text-center w-80 py-2 border border-white">
                    <div className="flex justify-center items-center">

                      <span>{item.password}</span>
                      <div className="hover:cursor-pointer" onClick={()=>{copyText(item.password)}}>

                        <lord-icon
                          style={{ width: "25px", paddingTop: "2px", paddingLeft: "6px", cursor: "pointer", }}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover" >
                        </lord-icon>
                      </div>

                    </div>
                  </td>
                </tr>
              })}


            </tbody>
          </table>
        }
      </div>
    </div>
  )
}

export default Manager
