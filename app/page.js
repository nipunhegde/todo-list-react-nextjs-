"use client"
import React, { useState } from 'react'

const page = () => {
  const [tittle, settittle] = useState("")
  const [desc, setdesc] = useState("")
  const [maintask, setmaintask] = useState([])
  const submithandler=(e)=>{
    e.preventDefault()
    console.log(tittle,desc)
    setmaintask([...maintask,{tittle,desc}])
    settittle("")
    setdesc("")
    console.log(maintask)


  }
  const deletehandler=(i)=>{
    let copy=[...maintask]
    copy.splice(i,1)
    setmaintask(copy)
  }
  let render=<h2>No Task Available</h2>
  if(maintask.length>0){
  render=maintask.map((t,i)=>
  {
    return(
      <li key={i} className='flex items-center justify-between mb-8'>
      <div className='flex items-center justify-between  w-2/3'>
        <h4 className='text-2xl font-semibold'>{t.tittle}</h4>
        <h4 className='text-xl font-semibold'>{t.desc}</h4>
      </div>
      <button onClick={()=>{
        deletehandler(i)
        }} 
        className='flex items bg-red-900 text-white rounded  px-4 py-4'>Delete</button>
      </li>
    );
  });
  }

  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl text-center font-bold'>
      My Todo List
    </h1>
    <form onSubmit={submithandler}>
      <input type='text' className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' placeholder='Enter the task here' 
      value={tittle} onChange={(e)=>settittle(e.target.value)}/>
      <input type='text' className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2' placeholder='Enter the description here'
      value={desc} onChange={(e)=>setdesc(e.target.value)}/>
      <button className='bg-black text-white m-8 px-4 py-2 rounded'>Add Task</button>
      
    </form>
    <hr/>
    <div className='p-8 bg-slate-200 text-black'>
      <ul>
        {render}
      </ul>
      </div>

    </>
  )
}

export default page