import React from 'react'
import logo from '../assets/logo.png'
import active from "../assets/active.png"
import lock from "../assets/lock.png"
import profile from "../assets/profile.png"
import sth from "../assets/sth.png"
import msg from "../assets/msg.png"
import settings from "../assets/settings.png"
import logout from "../assets/Logout.png"
import banner from "../assets/banner.png"
import frame from "../assets/Frame 9.png"



const Sidebar = () => {
  return (
    <>
    <div className='w-[88px] h-[1024px] bg-[#FFFFFF]'>
        <img src={logo} className='w-[49px] h-[49px] mt-[22px] ml-[19px] gap-0px opacity-0px'></img>
        <div className='mt-16 ml-4 '>
        <img src={active} className='w-[56px] h-[56px] mt-[22px] gap-0px opacity-0px'></img>
        <img src={lock} className='w-[56px] h-[56px] mt-[11px] gap-0px opacity-0px'></img>
        <img src={profile} className='w-[56px] h-[56px] mt-[11px] gap-0px opacity-0px'></img>
        <img src={sth} className='w-[56px] h-[56px] mt-[11px] gap-0px opacity-0px'></img>
        <img src={msg} className='w-[56px] h-[56px] mt-[11px] gap-0px opacity-0px'></img>
        <img src={settings} className='w-[56px] h-[56px] mt-[11px] gap-0px opacity-0px'></img>
        </div>

        <div className='mt-[256px] ml-[16px]'>
        <img src={logout} className='w-[56px] h-[46px] gap-0px opacity-0px'></img>
        <img src={banner} className='w-[56px] h-[56px] mt-[22px] gap-0px opacity-0px'></img>
        </div>

        <img src={frame} className='w-[24px] h-[32px] mt-[52px] gap-0px opacity-0px ml-[32px]'  />
     
     
      


    </div>
    </>
  )
}

export default Sidebar