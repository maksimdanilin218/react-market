import style from "./Footer.module.css"
import { footerData } from "../../data/FooterData"

function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.footerSection}>
                {footerData.map((section, index) => (
                    <div key={index}>
                        <h3 className={style.title}>{section.title}</h3>
                        {section.links.map((item, i) => (
                            <p className={style.link} key={i}>{item}</p>
                        ))}
                    </div>
                ))}
            </div>
            <div className={style.footerBottom}>
                © 2026 Exodus — Интернет-магазин электроники
            </div>

        </footer>
    )
}

export default Footer