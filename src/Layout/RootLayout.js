import {NavLink, Outlet} from "react-router-dom";


export default function RootLayout(){
    return(
        <div className='root-layout'>
            <header>
                <nav className='text-white font-poppins text-xl tracking-wide'>
                    <h1><NavLink to='/'>Ин & Проф</NavLink></h1>
                    <NavLink to='/o-nas'>О нас</NavLink>
                    <NavLink to='/news'>Новости</NavLink>
                    <NavLink to='/organizers'>Организаторы</NavLink>
                    <NavLink to='/graphic'>График</NavLink>
                    <NavLink to='/register'>Участвовать</NavLink>
                    <NavLink to='/login'>Войти</NavLink>
                    <NavLink to='/help'>Помощь</NavLink>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    )
}