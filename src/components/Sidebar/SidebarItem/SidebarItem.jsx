import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./SidebarItem.module.css"

function SidebarItem({ item }) {
    const [open, setOpen] = useState(false)
    const hasChildren = item.children && item.children.length > 0;

    return (
        <div className={style.sidebarItem}>
            <div className={style.sidebarTitle} onClick={() => setOpen(!open)}>
                <img className={style.icon} src={item.icon} alt="" />
                <Link to={item.path} key={item.path} className={style.link}>{item.title}</Link>
            </div>
            {hasChildren && open && (
                <div className={style.sidebarChildren}>
                    {item.children.map((child) => (
                        <SidebarItem key={child.id} item={child} />
                    ))}
                </div>
            )}
        </div>
    )
}
export default SidebarItem;