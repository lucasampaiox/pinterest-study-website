import React from 'react'
import Image from 'next/image'

function UserInfo({userInfo}:any) {
  console.log(userInfo)
  return (
    <div className='flex flex-col items-center mt-2'>
      <Image src={userInfo.userImage} alt='userinfo' width={80} height={80} className='rounded-full '/>

      <h2 className='text-[30px] font-semibold'>{userInfo.userName}</h2>
      <h2 className='text-gray-400'>{userInfo.email}</h2>
      <button className='bg-gray-300 p-2 px-3 font-semibold mt-5 rounded-full'>Share</button>
    </div>
  )
}

export default UserInfo