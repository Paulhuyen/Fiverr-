import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import MenuPages from '../components/MenuPage/MenuPages'

type Props = {}

export default function PagesTemplates({}: Props) {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}