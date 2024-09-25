import React, { useState } from 'react'

const App = () => {
  const [color , setcolor] = useState("Green")
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full'>
       <button onClick={()=>{setcolor("red")}} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"red"}} >Red</button> 
       <button onClick={()=>{setcolor("aqua")}} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"aqua"}} >Aqua</button> 
       <button onClick={()=>{setcolor("blue")}} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"Blue"}} >Blue</button> 
       <button onClick={()=>{setcolor("green")}} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"green"}} >Green</button> 
       <button onClick={()=>{setcolor("black")}} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor:"black"}} >Black</button> 
      </div> 
    </div>
    </div>
  )
}
export default App
