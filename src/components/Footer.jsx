import React from 'react'

function Footer() {
  return (
    <header className='flex items-center justify-between gap-4 p-3'>
            <a href target='_blank'><h1 className='text-[10px] font-medium sm:text-sm text-slate-400'>Copyright © Developed By |<span className='text-slate-600 bold hover:text-slate-800 duration-200'> Sooraj Sutar</span></h1></a>
            <div className='gap-4 flex items-center '>
                
                <a href="https://www.instagram.com/awsm_sooraj18" target='_blank' className='flex items-center specialBtni px-2 py-1 text-slate-500 rounded-full duration-200 hover:text-rose-400'>
                    
                <i className="fa-brands fa-instagram text-xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/sooraj-sutar-90496b202" target='_blank' className='flex items-center specialBtn px-2 py-1 text-slate-500 rounded-full duration-200 hover:text-blue-600'>

                <i className="fa-brands fa-linkedin text-xl"></i>
                </a>

                <a href="https://github.com/Sooraj-Sutar" target='_blank' className='flex items-center specialBtng px-2 py-1 text-slate-500 rounded-full duration-200 hover:text-slate-900'>
                    
                <i className="fa-brands fa-github text-xl"></i>
                </a>
            </div>
        </header>
  )
}

export default Footer
