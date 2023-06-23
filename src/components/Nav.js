import React, { useState } from 'react'
import TableRowsIcon from '@mui/icons-material/TableRows';
import CloseIcon from '@mui/icons-material/Close';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { Link } from 'react-router-dom';
function Nav() {
    let Links =[
        {name:"HOME",link:"/"},
        {name:"Portfolio",link:"/portfolio"},
        {name:"Testmonial",link:"/testmonial"},
        {name:"Package",link:"/package"},
        {name:"Contact",link:"/contact"},
      ];
      let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-50'>
    <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
   
    
    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
        {open ? <CloseIcon /> : <TableRowsIcon />  }
    </div>

    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
      {
        Links.map((link)=>(
          <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
            <Link to={`${link.link}`}>
            <span  className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</span>
            </Link>
            
          </li>
        ))
      }
    </ul>
    <Link className='w-200px' to='/'>
    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-gray-800'>
      <span className='text-3xl  mr-1 '>
        <NewspaperIcon />
      </span>
      amanuel
    </div>
    </Link>
    </div>
  </div>
  )
}

export default Nav
