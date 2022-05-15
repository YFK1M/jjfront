import {FC} from "react";
import s from "./Navbar.module.sass";
import {Link} from "react-router-dom";
import logo from "../../../assets/images/all/logo.svg"

const Navbar: FC = () => {
    return (
        <div className={s.navbar}>
            <Link to={`/`} className={s.navbar__logo}>
                <img className={s.navbar__logo_img} src={logo} alt="Логотип"/>
            </Link>
            <div className={s.navbar__content}>
                <div className={s.navbar__links}>
                    <div className={s.navbar__link}>
                        <Link className={s.navbar__link_a} to={`/news`}>новости</Link>
                    </div>
                    <div className={s.navbar__link}>
                        <Link className={s.navbar__link_a} to={`/club`}>клуб</Link>
                    </div>
                    <div className={s.navbar__link}>
                        <Link className={s.navbar__link_a} to={`/matches`}>матчи</Link>
                    </div>
                    <div className={s.navbar__link}>
                        <Link className={s.navbar__link_a} to={`/stadium`}>стадион</Link>
                    </div>
                    <div className={s.navbar__link}>
                        <Link className={s.navbar__link_a} to={`/merch`}>мерч</Link>
                    </div>
                </div>
                <div className={s.navbar__buttons}>
                    <div className={`${s.navbar__button} ${s.navbar__auth}`}>войти</div>
                    <div className={`${s.navbar__button} ${s.navbar__reg}`}>регистрация</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar