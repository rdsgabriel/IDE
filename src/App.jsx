import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black w-full h-screen flex text-white'>
      <div className='mx-auto my-24 h-4/5 w-3/5 bg-zinc-700 border rounded-lg border-zinc-600'>
    <div className='flex flex-nowrap flex-row gap-x-3 ml-2' /* header */>
    <span className='w-4 h-4 rounded-full bg-red-500 mt-2'></span>
    <span className='w-4 h-4 rounded-full bg-yellow-500 mt-2'></span>
    <span className='w-4 h-4 rounded-full bg-green-500 mt-2'></span>
    </div>

    <div className='border rounded-lg mt-2 border-zinc-600' /* divider */ />

  

    <div className='grid grid-cols-2 h-full'>
      <div class="border-r-2  mt-2 border-zinc-600 mb-12 relative">
        <div className='flex'>
        <p className='ml-2 font-mono'>~ Gabriel$</p> 
        <span className=' ml-2 mt-1 bg-white px-1 py-2 rounded-sm cursor-text w-2 h-2 animate-blink'></span>
        </div>
      

        <div /* mock */>
          <p className='ml-4 mt-3 mb-0.5 font-mono text-white'> exemplo de código     '/'      exemplo de código </p>
        <p className='ml-4 mb-0.5 font-mono text-white'> exemplo de código     '/'      exemplo de código </p>
        <p className='ml-4 mb-0.5 font-mono text-white'> exemplo de código     '/'      exemplo de código </p>
        <p className='ml-4 mb-0.5 font-mono text-white'> exemplo de código     '/'      exemplo de código </p>
        <p className='ml-4 mb-0.5 font-mono text-white'> exemplo de código     '/'      exemplo de código </p>
        <p className='ml-4 mb-0.5 font-mono text-white'> exemplo de código     '/'      exemplo de código </p>
        <p className='ml-4 mb-0.5 font-mono text-white'> exemplo de código     '/'      exemplo de código </p>
        <p className='ml-4 mb-0.5 font-mono text-white'> exemplo de código     '/'      exemplo de código </p>
        <p className='ml-4 mb-0.5 font-mono text-white'> exemplo de código     '/'      exemplo de código </p>
        <p className='ml-4 mb-0.5 font-mono text-white'> exemplo de código     '/'      exemplo de código </p>
        <p className='ml-4 mb-0.5 font-mono text-white'> exemplo de código     '/'      exemplo de código </p>
        <p className='ml-4 mb-0.5 font-mono text-white'> exemplo de código     '/'      exemplo de código </p>
        <p className='ml-4 mb-0.5 font-mono text-green-200'> exemplo de código     '/'      exemplo de código </p>
        
        <p className='ml-4 mb-0.5 font-mono text-green-200'> exemplo de código     '/'      exemplo de código </p>
        <p className='ml-4 mb-0.5 font-mono text-green-200'> exemplo de código     '/'      exemplo de código </p>
        <p className='ml-4 mb-0.5 font-mono text-green-500'> exemplo de código     '/'      exemplo de código </p>
        <p className='ml-4 mb-0.5 font-mono text-green-500'> exemplo de código     '/'      exemplo de código </p>
        <p className='ml-4 mb-0.5 font-mono text-green-500'> exemplo de código     '/'      exemplo de código </p>
        <p className='ml-4 mb-0.5 font-mono text-green-500'> exemplo de código     '/'      exemplo de código </p>
        
        <p className='ml-4 mb-0.5 font-mono text-green-500'> exemplo de código     '/'      exemplo de código </p>
        <p className='ml-4 mb-0.5 font-mono text-green-500'> exemplo de código     '/'      exemplo de código </p>
        <p className='ml-4 mb-0.5 font-mono text-green-500'> exemplo de código     '/'      exemplo de código </p>
        <p className='ml-4 mb-0.5 font-mono text-green-500'> exemplo de código     '/'      exemplo de código </p>
        <p className='ml-4 mb-0.5 font-mono text-green-500'> exemplo de código     '/'      exemplo de código </p>
        <p className='ml-4 mb-0.5 font-mono text-green-500'> exemplo de código     '/'      exemplo de código </p>
        </div>
        
        
      <button class=" absolute bottom-0 right-0 bg-zinc-600 mr-2 hover:bg-zinc-500 font-mono py-0.5 px-6 rounded-full">
            Run
      </button>
      
      </div>
      <div class="mt-2 mb-12 relative">
        <div /* mock */>
        <p className='ml-4 mb-0.5 font-mono text-green-600 mt-9'> resultado esperado: </p>
        <p className='ml-4 mb-0.5 font-mono text-green-600'> x </p>
        <p className='ml-4 mb-0.5 font-mono text-green-600'> resultado obtido: </p>
        <p className='ml-4 mb-0.5 font-mono text-green-600'> x </p>
        <p className='ml-4 mb-0.5 font-mono text-green-600'> rodou perfeito colega ! mete o pé</p>
        </div>
       
      <button class=" absolute bottom-0 right-0 bg-zinc-600 mr-2 hover:bg-zinc-500 font-mono py-0.5 px-6 rounded-full">
          Clear
      </button>

      </div>
    </div>
      
    
  </div>
    </div>
  )
}

export default App
