import React from 'react'
import HeaderWebsite from '../HeaderWebsite'
import MainWebsite from '../MainWebsite'
import FooterWebsite from '../FooterWebsite'
import { Outlet } from 'react-router-dom'

const LayuotWebsite = () => {
  return (
    <>
    <HeaderWebsite />
    <Outlet />
    <FooterWebsite />
    </>
  )
}

export default LayuotWebsite
