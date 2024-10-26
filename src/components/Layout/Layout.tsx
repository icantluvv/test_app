import React from "react"
import Header from "../Header/Header"
import SideBar from "../SideBar/SideBar"
import { Outlet } from "react-router-dom"
import styles from "./Layout.module.scss"

const Layout: React.FC<{ children?: React.ReactNode }> = () => {
  return (
    <div className={styles.layout}>
      <SideBar />
      <main className={styles.layout__main}>
        <Header />
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
