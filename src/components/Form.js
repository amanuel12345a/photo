import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Testmon from './testmon'

function Form({aman}) {
  const [firstName,setFirstName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [lastName,setLastName] = useState('')
  const [text,setText] = useState('')
  const [api,setApi] = useState([])

    const handleSumbit = async(e) =>{
        e.preventDefault()
        const data = await axios.post('http://localhost:3001/email',{
          firstName:firstName,
          email:email,
          phone:phone,
          lastName:lastName,
          text:text
        }) 
        alert(data.data)
        setEmail('')
        setFirstName('')
        setLastName('')
        setPhone('')
        setText('')

    }
    const sumbit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3001/data',{
        firstName:firstName,
        email:email,
        phone:phone,
        lastName:lastName,
        text:text
      }).then((res)=>{
        alert(res.data)
      })
      setEmail('')
      setFirstName('')
      setLastName('')
      setPhone('')
      setText('')
    }
    useEffect(()=>{
      axios.get('http://localhost:3001/data').then((res)=>{
        setApi(res.data)
      })
    },[])
  return (
    <div className='flex-col justify-center mt-[70px]'>
      {
        aman && <div className='md:text-center'>
          <h1 className='text-[30px] text-pink-500'>Let's get in touch!</h1>
        </div>
      }
      <form className='flex flex-col ml-5' >
        <div className='flex flex-col md:flex-row md:mx-auto '>
            <div className='my-5 w-[90vw] md:w-[400px]  md:mx-5'>
              <label>First Name</label>
            <input onChange={(e)=>setFirstName(e.target.value)} value={firstName} className='shadow appearance-none border-2 border-black rounded w-full py-2 px-3 md:py-4 md:px-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='First Name'/>
            </div>
        <div className='my-5 w-[90vw] md:w-[400px] md:mx-5'>
        <label>Email</label>
        <input onChange={(e)=>setEmail(e.target.value)} value={email} className='shadow appearance-none border-2 border-black rounded w-full py-2 px-3 md:py-4 md:px-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'  type='text' placeholder='email' required/>
        </div>
        
        </div>
        <div className='flex flex-col md:flex-row md:mx-auto'>
            <div className='my-5 sm:w-[90vw] md:w-[400px] md:mx-5'>
            <label>Last Name</label>
            <input onChange={(e)=>setLastName(e.target.value)} value={lastName} className='shadow appearance-none border-2 border-black rounded w-full py-2 px-3 md:py-4 md:px-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' placeholder='Last Name'/>
            </div>
        <div className='my-5 sm:w-[90vw] md:w-[400px]  md:mx-5'>
        <label>Phone</label>
        <input onChange={(e)=>setPhone(e.target.value)} value={phone} className='shadow appearance-none border-2 border-black rounded w-full py-2 px-3 md:py-4 md:px-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'  type='text' placeholder='Phone'/>
        </div>
        
        </div>
        <div className='mx-auto'>
        <textarea onChange={(e)=>setText(e.target.value)} value={text} className='my-2 w-[300px] md:w-[500px] h-[100px] mx-auto border-2 border-black pl-5 text-[18px] resize-none' placeholder={aman ? 'your package' : 'write your testimonial here.... '}  required/>
        </div>
        <div className='mx-auto text-center'>
          {
            aman && <p className='font-light text-[18px]'>If you don't recieve an email from me in 12 hours after sumbitting please check your junk/spam.</p>
          }
          {
            aman && <button onClick={handleSumbit} className='bg-green-300 h-[40px] mt-2 w-[250px]' type="submit"> Sumbit </button>
          }
          {
            !aman &&  <button onClick={sumbit} className='bg-green-300 h-[40px] mt-2 w-[250px]' type="submit"> Add Testemonial</button>
          }
        </div>
        
      </form>
      {
        !aman && api?.map((item)=>{
            return <Testmon firstName={item.firstName} lastName={item.lastName} text={item.text}/>
        })
      }
    </div>
  )
}

export default Form
