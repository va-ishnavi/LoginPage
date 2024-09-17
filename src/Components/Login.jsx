import CoverImg from '../asset/cover_img.jpeg';


const colors = {
  primary: '#060606',
  background: '#f5f5f5',
  disabled: '#D9D9D9'
}

const Login = () => {
  return (
    <div className='w-full h-screen flex items-start'>
      <div className='relative w-1/2 h-full flex flex-col'>
        <div className='absolute top-[25%] left-[10%] flex flex-col'>
          <h1 className='text-4xl text-white font-bold my-4'> Turn your ideas into reality</h1>
          <p className='text-base text-white font-semibold'>Let's plan your next Event Together</p>
        </div>
        <img src={CoverImg} className='w-full h-full object-cover' />
      </div>

      {/* rightside */}
      <div className= ' w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between'>
        <h1 className='text-xl text-[#060606] font-semibold'>Interactive Brand</h1>
        <div className='w-full flex flex-col max-w-[550px]'>
          <div className='w-full flex flex-col mb-2'>
            <h3 className='text-3xl font-semibold mb-2'>Login</h3>
            <p className='text-base mb-2'>Welcome back! Please enter your mobile number.</p>
          </div>
           
          <div className='w-full flex flex-col'>
            <input 
            type="mobile no"
            placeholder="Mobile Number"
            className='w-full text-black py-2 my-4 bg-transparent border-b border-black outline-none focus:outline-none'/>  
          </div>
          <div  className='w-full flex flex-col'>
           <button className='w-full text-white my-2 bg-[#060606] rounded-md p-4 text-center flex items-center justify-center hover:opacity-75'>
             Continue
           </button>
          </div>
        </div>
        <div className='w-full flex items-center justify-center'>
          <p className='text-sm font-normal text-[#060606]'>Dont have a account? <span className="font-semibold underline underline-offset-2 cursor-pointer">sign up for free</span> </p>
        </div>
      </div>
    </div>
  )
}
export default Login;