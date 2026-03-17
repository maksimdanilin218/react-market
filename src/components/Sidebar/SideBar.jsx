import style from "./SideBar.module.css"
import { sidebarData } from "../../data/SidebarData"
import SidebarItem from "./SidebarItem/SidebarItem"

export default function SideBar(){
    return(
        <div className={style.sidebar}>
            {sidebarData.map((item) => (
                <SidebarItem key={item.id} item={item}/>
            ))}
        </div>
    )
}