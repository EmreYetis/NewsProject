import React from 'react'

function Login() {
  return (
    <div className='container  mx-auto text-center border w-3/6 m-8 pb-5 shadow-xl'>
      <div className='grid grid-rows-1 grid-cols-2 mx-auto  border-2 rounded-t-lg  '>
        <div className='col-span-1 h-10 text-lg bg-gray-300 font-bold text-gray-500 block'> <a href='#'>SİGN İN</a> </div>
        <div className=' col-span-1 h-10 bg-red-600 text-white text-lg font-bold  '><a href='#'>LOGİN</a></div> </div>
      <div className='grid grid-rows-1 grid-cols-1  mx-auto'>
        <div className='col-span-1 text-lg  font-bold mx-auto  '> <img src='/logo-dha.png' alt="Açıklama" /> </div>
      </div>
        <div className='grid grid-cols-1  mx-auto'>
       <form className=' text-left'>
       <div className='col-span-1'>
        <label className='w-full px-2'>
        <h1 className='font-mono px-2 pb-1'>E-MAİL</h1>
        <input
          className='font-mono border px-2 w-full'
          type="email"
          placeholder="example@gmail.com"
        />
      </label>
    </div>
    <div className='col-span-1'>
      <label className='w-full px-2'>
        <h1 className='font-mono px-2 pb-1'>Password</h1>
        <input
          className='font-mono px-2  border w-full'
          type="password"
          placeholder="Password"
        />
      </label>
    </div>
    <button className="font-mono w-full bg-red-600 text-white px-4 py-2  rounded mt-9">
      Submit
    </button>
  </form>
</div>
    <div className="grid grid-cols-1">
   <div className="col-span-1 m-2">
    <a className='hover:underline font-serif text-blue-500' href='#' >Forgot Password ?</a>
  </div>
  <div className="col-span-1 m-4">
    <h6 className='font-serif'>Login easily with your social media accounts!</h6>
  </div>
  <div className='col-span-1 flex justify-center mt-4 mx-20 border rounded-full'>
  <img width="48" height="48" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/>
  <a className='font-serif  px-2 py-2' href='#'>Continue with Facebook</a>
  </div>
  <div className='col-span-1 flex justify-center mt-4 mx-20 border rounded-full'>
  <img width="48" height="48" src="https://img.icons8.com/fluency/48/google-logo.png" alt="google-logo"/>
  <a className='font-serif  px-4 py-2' href='#'>Continue with Google</a>
  </div>
</div>
 







    </div>

  )
}

export default Login