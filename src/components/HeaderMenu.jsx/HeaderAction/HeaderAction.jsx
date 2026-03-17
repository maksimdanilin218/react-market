import style from "./HeaderAction.module.css"
import heart from "/heartIcon.png" 
import cart from "/cartIcon.png" 
import profile from "/profileIcon.png" 

export default function HeaderAction(){
    return(
        <div className={style.container}>
            <div className={style.favorite}>
                <img className={style.icon} src={heart} alt="" />
                <h1 className={style.title}>Избранное</h1>
            </div>
            <div className={style.cart}>
                <img className={style.icon} src={cart} alt="" />
            </div>
            <div className={style.profile}>
                <img className={style.icon} src={profile} alt="" />
            </div>
        </div>
    )
}