import React from 'react'
import companylogo from '../assets/bag_logo.png';
import notificationIcon from '../assets/notification.png'
import profileIcon from '../assets/profile_image.jpg'

const Navbar = () => {
    return (
        <div className='flex justify-between border-b-2 px-28 py-2'>
            <div className='flex justify-between items-center'>
                <img src={companylogo} alt="" className='h-[50px] w-[50px]' />
                <h1 className='font-semibold text-xl'>Explorin Solutions</h1>
            </div>
            <div className='flex justify-between items-center gap-4'>
                <div className='flex justify-between items-center gap-4'>
                    <input type="checkbox" name="" id="" className='h-6 w-6' />
                    <label className='text-gray-400'>My saved Jobs only</label>
                </div>
                <div className='flex justify-between items-center gap-4'>
                    <img src={notificationIcon} alt="" className='h-[25px] w-[25px]' />
                    <img src={profileIcon} alt="" className='h-[35px] w-[35px] rounded-2xl' />
                </div>
            </div>
        </div>
    )
}

export default Navbar