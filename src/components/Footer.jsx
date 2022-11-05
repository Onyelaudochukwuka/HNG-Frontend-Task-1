import React from 'react'
import { Zuri } from "../assets/icon"

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:w-3/4 w-11/12 justify-between lg:items-center items-start gap-6 border-t-2 py-8 border-primary mx-auto">
      <Zuri />
      <h3 className="text-text-light">HNG Internship 9 Frontend Task</h3>
      <img src="/I4G.png" alt="ingressive for good logo"/>
    </div>
  )
}

export default Footer