

import { NavLink } from "react-router-dom"

export default function NotFound() {
    return (
        <div>
            <h2>Страница не найдена!</h2>

            <p>Вернуться на  <NavLink to="/">домашнюю страницу</NavLink>.</p>
        </div>
    )
}