import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

function Login() {
    const {data:session}=useSession();
    const router=useRouter();
    useEffect(()=>{
      console.log("User Session",)
      if(session)
      {
        router.push("/")
      }
     
    },[session])
  return (
    <div className='flex flex-col items-center justify-center h-full pt-6'>
       <Image src="/server002.png" alt="logo" className="cursor-pointer" width={70} height={30} onClick={()=>router.push('/')} />
         <h3 className="text-[#222831]  font-extrabold ">CloudFile</h3>
         <p className='p-4 font-medium text-slate-800 max-w-sm mb-4'>Store your Data in the cloud. Save space on your computer, tablet or phone and upload your images & documents to CloudFile.</p>
        <button 
        className=' text-white shadow-md mb-8 pr-4'
        onClick={()=>signIn()}>
            <Image src='/google.png'
            alt='google'
            width={300}
            height={300}
            />
            </button>
    </div>
  )
}

export default Login