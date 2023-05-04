import { useState } from 'react'
import { Login } from './login' 
import './App.css'



function App() {
  const [user, setUser] = useState('')
  const [code, setCode] = useState('')
  const [output, setOutput] = useState('')


  function execute(code) {
    let output = '';
    const console = {
      log: (msg) => (output += `${msg}`),
    };

    try {
      const result = eval(code);
      if (result !== undefined) {
        output = result;
      }
    } catch (e) {
      console.log(e);
      output = e
    }
    return [output];
  }
  
  
  

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      const result = execute(code)
      setOutput(result)
    } catch (error) {
      setOutput(error.message)
    }
  }
  
 
  
  
  return (
    <>
    
  {user ? (
  <div className='bg-black w-screen h-screen grid text-white'>
    
    <div className='mx-auto my-24 h-4/5 w-3/5 bg-zinc-700 border rounded-lg border-zinc-600'>
  <div className='flex flex-nowrap flex-row gap-x-3 ml-2' /* header */>
  <span className='w-4 h-4 rounded-full bg-red-500 mt-2'></span>
  <span className='w-4 h-4 rounded-full bg-yellow-500 mt-2'></span>
  <span className='w-4 h-4 rounded-full bg-green-500 mt-2'></span>
  </div>

  <div className='border rounded-lg mt-2 border-zinc-600' /* divider */ />


  <div className='grid grid-cols-2 h-full w-full'>
    <div className="border-r-2 w-full mt-2 border-zinc-600 mb-12 relative">
      <div className='flex w-full h-full pr-20'>   
        <p className='pl-1'>{`${user}@web~$: >`}</p>

        <form action="" onSubmit={handleSubmit} 
           >

        <textarea
          className=' caret-rose-600 resize-none pt-1 w-96 h-full ml-5 font-mono bg-zinc-700 border-none outline-none overflow-hidden 
          '
          value={code}
          onChange={e => setCode(e.target.value)}
        />  

            <button 

            className=" absolute bottom-0 right-0 mr-2 font-mono py-0.5 px-6 rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-600  text-zinc-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none shadow-lg shadow-green-500/50">
              Run
             </button>
        </form>
        
      </div>
    

      
      
    
    
    </div>
    <div className="mt-2 mb-12 relative">
    <textarea
          className=' caret-rose-600 resize-none w-96 pt-1 h-full ml-5 text-white font-mono bg-zinc-700 border-none outline-none overflow-hidden 
          '
          value={String(output)}
          
        ></textarea>
     
      <button onClick={() => setOutput('')} className=" absolute bottom-0 right-0 mr-2 font-mono py-0.5 px-4 rounded-lg text-zinc-800 bg-gradient-to-r from-zinc-400 via-zinc-500 to-zinc-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none">
          Clear
    </button>

    </div>
  </div>
    
  
</div>
  </div>) : (  <Login setUser={setUser}></Login> ) }


</>
  )
}

export default App



