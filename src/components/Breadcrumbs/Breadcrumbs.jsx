import { Link, useLocation } from "react-router-dom"

import style from "./Breadcrumbs.module.css"

export default function Breadcrumbs() {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter(Boolean);

    const breadcrumbNameMap = {
        electronics: "Электроника",
        smartphones: "Смартфоны",
        laptop: "Ноутбуки",
        tv: "Телевизоры",
        headphones: "Наушники",
        smartwatch: "Часы",
        accessories: "Аксессуары",
        household: "Бытовая техника"
        
    };

    return (
        <div className={style.container}>
            <Link className={style.link} to="/">Главная</Link>
            {pathnames.map((title, index) => {
                const routeTo = "/" + pathnames.slice(0, index + 1).join("/")

                return (
                    <span className={style.span} key={routeTo}>
                        {" > "}
                        <Link className={style.link} to={routeTo}>
                            {breadcrumbNameMap[title] || title}
                        </Link>
                    </span>
                )
            })}
        </div>
    )
}