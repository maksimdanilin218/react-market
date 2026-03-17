import style from "./SearchBar.module.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SearchBar() {
    // 🔥 карта поиска (ключ → куда перейти)
    const routes = [
        { keyword: "смартфон", path: "/electronics/smartphones" },
        { keyword: "ноутбук", path: "/electronics/laptop" },
        { keyword: "телевизор", path: "/electronics/tv" },
        { keyword: "бытовая техника", path: "/household" },
        { keyword: "аксессуары", path: "/accessories" }
    ]

    const [value, setValue] = useState("")
    const navigate = useNavigate()
    const handleSearch = (e) => {
        e.preventDefault()
        // 👇 нормализуем строку
        const query = value.toLowerCase().trim()
        // 👇 ищем совпадение
        const match = routes.find(item =>
            query.includes(item.keyword)
        )
        // 👇 если нашли — делаем переход
        if (match) {
            navigate(match.path)
        }
    }

    return (
        <div className={style.SearcContainer}>
            <form className={style.container} onSubmit={handleSearch}>
                <input className={style.input} type="text" placeholder="Поиск..." value={value} onChange={(e) => setValue(e.target.value)} />
                <button className={style.btn} type="submit"><img className={style.icon} src="./icon/search.png" alt="" /></button>
            </form>
        </div>
    )
}