import { useState } from "react"


export function Login (props) {
  const [userName, setUserName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.setUser(userName)
  }


  return (
  <>
   <div className="bg-black w-full h-screen flex text-white">
    <div className="mx-auto my-auto h-1/4 w-1/5 bg-zinc-700 border rounded-lg border-zinc-600">


    <div className='flex flex-nowrap flex-row gap-x-3 ml-2' /* header */>
  <span className='w-4 h-4 rounded-full bg-red-500 mt-2'></span>
  <span className='w-4 h-4 rounded-full bg-yellow-500 mt-2'></span>
  <span className='w-4 h-4 rounded-full bg-green-500 mt-2'></span>
  </div>

  <form className="w-full max-w-xs m-auto my-16" onSubmit={handleSubmit}>
  <div className="flex items-center border-b border-green-500 py-3">
    <input className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none " type="text" value={userName} onChange={e => setUserName(e.target.value)} placeholder="Seu nome" />
    <button className="flex-shrink-0 bg-green-500 hover:bg-green-700 text-sm  py-1 px-2 rounded bg-gradient-to-r from-green-400 via-green-500 to-green-600  text-zinc-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none shadow-lg shadow-green-500/50" type="submit">
      Entrar
    </button>
  </div>
</form>
    

    </div>
   </div>
  </>
  )

}

