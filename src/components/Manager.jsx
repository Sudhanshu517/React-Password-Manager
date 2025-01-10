import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';



const Manager = () => {
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwords, setPasswords] = useState([])
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
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{4,}$/;

    if(form.site.length > 3 && form.username.length > 3 && form.password.length > 3 &&
      passwordRegex.test(form.password) // Check if password meets the criteria 
      )
      {
        setPasswordArray([...passwordArray, {...form, id: uuidv4() }]);
  
      localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id:uuidv4() }]));
      setform({ site: "", username: "", password: "" })
      console.log([...passwordArray, {...form, id: uuidv4() }]);
      toast('Password Saved!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
    else{
      if(!passwordRegex.test(form.password)){
        toast.error(
          "Password must include at least 1 lowercase, 1 uppercase, 1 number, and 1 special symbol!",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          }
        );
        alert("Password should contain atleast a lowercase, uppercase, number and a special symbol")
      }
      toast('Password not saved!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });

    }

  };


  const copyText = (text) => {
    toast('Copied to clipboard!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
    navigator.clipboard.writeText(text)

  }

  const editPassword = (id) => {
    console.log("Edititing item with id : " + id)
    setform(passwordArray.filter((item)=>item.id==id)[0])

    setPasswordArray(passwordArray.filter((item)=>item.id != id))
  }

  const deletePassword = (id) => {
    let c = confirm("Do you really want to delete password?");
    if(c){

      console.log("Deleting item with id : " + id)
      setPasswordArray(passwordArray.filter((item)=>item.id != id))
      localStorage.setItem("passwords", JSON.stringify(passwordArray.filter((item)=>item.id != id)));
    }
    toast('Password Deleted!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
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
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-600 opacity-20 blur-[100px]"></div></div>


      <div className="mx-auto md:container px-4 w-3/4 flex-col text-center flex gap-4 md:gap-0" >
        <h1 className="font-bold text-3xl text-center mt-4 md:mt-0"> 
          <span className="text-green-500">&lt;</span>
          <span>Pass</span>
          <span className="text-green-500">OP/&gt;</span>
        </h1>
        <p>Your own Password Manager</p>

        <input name="site" value={form.site} onChange={handleChange} placeholder="Enter website URL" className={`w-full rounded-full mx-auto py-1.5 px-2 border border-green-500 mt-3 md:mb-5`} type="text" />



        <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-5">
          <input name="username" value={form.username} onChange={handleChange} placeholder="Enter Username" className=" w-full rounded-full py-1.5 px-2 border border-green-500" type="text" />
          <div className="relative">

            <input ref={passwordRef} name="password" value={form.password} onChange={handleChange} placeholder="Enter Password" className=" w-full rounded-full py-1.5 px-2 border border-green-500" type="password" />
            <span className="absolute top-1.5 right-1" onClick={showPassword}  >
              <img ref={ref} width={25} src="./icons/hide.svg" alt="" />
            </span>
          </div>
        </div>
        <button onClick={savePassword} className="text-center flex justify-center bg-green-500 hover:bg-green-400 px-4 py-2 rounded-full items-center mx-auto border md:mb-2 md:mt-5 mb-10">

          <lord-icon
            src="https://cdn.lordicon.com/jgnvfzqg.json"
            trigger="hover" >
          </lord-icon>
          <span className="font-bold py-1 px-4 ">Save</span>

        </button>
      </div>
      <h2 className="md:ml-32 font-bold text-2xl mb-2 ml-[5%]">Your Passwords</h2>
      <div className="flex justify-center text-center container m-auto">
        {passwordArray.length == 0 && <div>No passwords to display</div>}
        {passwordArray.length != 0 &&
          <table className="table-auto md:mx-auto mx-1 border rounded-md overflow-hidden mb-20">
            <thead className="bg-green-600">
              <tr >
                <th className="py-2">Site</th>
                <th className="py-2">Username</th>
                <th className="py-2">Password</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-green-100">
              {passwordArray.map((item, index) => {

                return <tr key={index} >
                  <td className="text-center md:w-60 w-[20%] break-all border border-white py-1">
                    <div className="flex justify-center items-center">
                      <div>
                        <a href={item.site} target="_blank">{item.site}</a>

                      </div>
                      <div className="hover:cursor-pointer" onClick={() => { copyText(item.site) }}>

                        <lord-icon
                          style={{ width: "25px", paddingTop: "2px", paddingLeft: "6px", cursor: "pointer", }}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover" >
                        </lord-icon>
                      </div>
                    </div>
                  </td>
                  <td className="text-center md:w-60 w-[20%] break-all border border-white py-1">
                    <div className="flex justify-center items-center">

                      <span>{item.username}</span>
                      <div className="hover:cursor-pointer" onClick={() => { copyText(item.username) }}>

                        <lord-icon
                          style={{ width: "25px", paddingTop: "2px", paddingLeft: "6px", cursor: "pointer", }}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover" >
                        </lord-icon>
                      </div>

                    </div>

                  </td>
                  <td className="text-center md:w-60 w-[20%] break-all border border-white py-1">
                    <div className="flex justify-center items-center">

                      <span>{item.password}</span>
                      <div className="hover:cursor-pointer" onClick={() => { copyText(item.password) }}>

                        <lord-icon
                          style={{ width: "25px", paddingTop: "2px", paddingLeft: "6px", cursor: "pointer", }}
                          src="https://cdn.lordicon.com/iykgtsbt.json"
                          trigger="hover" >
                        </lord-icon>
                      </div>

                    </div>
                  </td>
                  <td className="text-center md:w-60 w-[20%] break-all border border-white py-1">
                    <div className="flex justify-center items-center gap-2">

                      <div className="hover:cursor-pointer" onClick={()=>editPassword(item.id)} >
                        <lord-icon
                          src="https://cdn.lordicon.com/gwlusjdu.json"
                          trigger="hover"
                          style={{ "width": "25px", "height": "25px" }}>
                        </lord-icon>
                      </div>
                      <div className="hover:cursor-pointer" onClick={()=>deletePassword(item.id)}>

                        <lord-icon
                          src="https://cdn.lordicon.com/skkahier.json"
                          trigger="hover"
                          style={{ "width": "25px", "height": "25px" }}>
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
