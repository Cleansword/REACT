
import { useState } from 'react'


function App() {
  const [color, setColor]= useState("olive")


  return (
    
    <div className='w-full h-screen duration-200'
    style={{backgroundColor:color}}
    >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={()=>setColor("red")} className='bg-red-500 ml-2 outline-none px-4 py-1 rounded-full text-white sahdow-lg'>Red</button>
          <button onClick={()=>setColor("blue")} className='bg-blue-500 ml-2 outline-none px-4 py-1 rounded-full text-white sahdow-lg'>blue</button>
          <button onClick={()=>setColor("violet")} className='bg-violet-500 ml-2 outline-none px-4 py-1 rounded-full text-white sahdow-lg'>violet</button>
          <button onClick={()=>setColor("pink")} className='bg-pink-500 ml-2 outline-none px-4 py-1 rounded-full text-white sahdow-lg'>pink</button>
          <button onClick={()=>setColor("green")} className='bg-green-500 ml-2 outline-none px-4 py-1 rounded-full text-white sahdow-lg'>green</button>
          <button onClick={()=>setColor("teal")} className='bg-teal-500 ml-2 text-black outline-none px-4 py-1 rounded-full text-black sahdow-lg'>teal</button>
          <button onClick={()=>setColor("gray")} className='bg-gray-800 ml-2 outline-none px-4 py-1 rounded-full text-white sahdow-lg'>gray</button>
          <button onClick={()=>setColor("black")} className='bg-black ml-2 outline-none px-4 py-1 rounded-full text-white sahdow-lg'>black</button>
          </div>
          
        </div>
    </div>
   
   
  )
}

export default App


