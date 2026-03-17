import style from "./MainLayout.module.css"
import HeaderMenu from "../../components/HeaderMenu.jsx/HeaderMenu"
import SideBar from "../../components/Sidebar/SideBar"
import Footer from "../../components/Footer/Footer"
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs"
import { Outlet } from "react-router-dom"

export default function MainLayout(){
    return(
        <div className={style.MainLayout}>
            <div className={style.HeaderMenu}>
                <HeaderMenu />
            </div>
            <div className={style.SideBar}>
                <SideBar />
            </div>
            <div className={style.MainContent}>
                <Breadcrumbs />
                <Outlet/>
            </div>
            <div className={style.Footer}>
                <Footer />
            </div>
        </div>
    )
}