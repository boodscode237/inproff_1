import {NavLink, Outlet} from "react-router-dom";

export default function HelpLayout() {
    return (
        <div className="help-layout">
            <h2>Помощь</h2>
            <p>Мы рекомендуем вам связаться с нами через наши официальные адреса электронной почты и учетные записи, так как форма еще не работает.</p>

            <nav>
                <NavLink to="faq">Просмотр часто задаваемых вопросов</NavLink>
                <NavLink to="contact">Cвязаться с нами</NavLink>
            </nav>

            <Outlet />
        </div>
    )
}