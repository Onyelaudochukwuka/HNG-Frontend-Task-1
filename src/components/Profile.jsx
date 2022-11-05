import React from 'react';
const Profile= () => {
  return (
      <div className="flex flex-col items-center gap-6">
          <img src="/user_profile.jpg" className="w-20 h-20 rounded-full" alt="user profile" />
          <p id="twitter" className="font-bold">FUMUDUKUS</p>
          <p id="slack" className="hidden">Onyela Udochukwuka</p>
      </div>
  )
}

export default Profile