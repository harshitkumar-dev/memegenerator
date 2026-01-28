import React from 'react'
import useGif from '../hooks/useGif'
import { Spinner } from './Spinner';

const Random = () => {
    const{gif,loading,fetchData}=useGif();

  return (


    <div className=' w-1/2 h-[450px] bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-4'>
        <h1 className=' text-3xl underline uppercase font-bold'>A Random Gif</h1>
{
    loading ? <Spinner/> : <img  src={gif} width='450' />
    
}   
     <button
        onClick={()=>{
            fetchData()
        }}
         className=' w-10/12 bg-white text-xl py-2 font-bold rounded-lg'>Generate</button>
    </div>
  )
}

export default Random