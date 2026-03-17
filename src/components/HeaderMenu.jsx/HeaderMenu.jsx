import style from "./HeaderMenu.module.css"
import Logo from "./Logo/Logo.jsx"
import SearchBar from "./SearchBar/SearchBar.jsx"
import HeaderAction from "./HeaderAction/HeaderAction.jsx"

export default function HeaderMenu(){
    return(
        <header className={style.header}>
            <div className={style.container}>
                <Logo />
                <SearchBar />
                <HeaderAction />
            </div>
        </header>
    )
}