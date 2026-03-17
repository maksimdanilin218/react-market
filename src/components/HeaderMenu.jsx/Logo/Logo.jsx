import { Link } from "react-router-dom";
import style from "./Logo.module.css"

export default function Logo(){
    return(
        <Link to="/">
            <img className={style.logo} src="./logo.png" alt="" />
        </Link>
    )
}
