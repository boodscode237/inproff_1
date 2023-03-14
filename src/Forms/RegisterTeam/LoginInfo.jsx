import HowToRegIcon from '@mui/icons-material/HowToReg';
import StarIcon from '@mui/icons-material/Star';
import Tilt from "react-parallax-tilt";
const LoginInfo = ({formValues, onChange}) => {
    return(
        <Tilt>
            <div className='container h-116 w-96 bg-white bg-opacity-10 rounded-2xl
            shadow-5xl relative z-2 border border-opacity-30 border-r-0
            border-b-0 backdrop-filter backdrop-blur-sm'>
                <form action="" className='h-full flex flex-col justify-evenly items-center'>
                    <div
                        className='grid gap-4 place-content-center
                        items-center text-center
                        hover:text-left'
                    >
                        <h1 className='text-white font-poppins text-2xl
                            tracking-widest'>
                            <HowToRegIcon/> Данные для входа
                        </h1>
                    </div>
                    <div className="mb-4">
                        <label
                            className="text-white font-poppins text-2xl
                            tracking-widest"
                            htmlFor="Username">Логин</label>
                        <input
                            type='text'
                            id='username'
                            name='username'
                            value={formValues.username}
                            onChange={onChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"/>
                    </div>
                    <div className="mb-4">
                        <label
                            className="text-white font-poppins text-2xl
                            tracking-widest"
                            htmlFor="Password">Пароль</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            value={formValues.password}
                            onChange={onChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"/>
                    </div>
                    <div className="mb-4">
                        <label
                            className="text-white font-poppins text-2xl
                            tracking-widest"
                            htmlFor="Confirm Password">Повторите пароль</label>
                        <input
                            type='password'
                            id='confirmPassword'
                            name='confirmPassword'
                            value={formValues.confirmPassword}
                            onChange={onChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"/>
                    </div>

                    <div className="flex items-start">
                        <div className="flex h-6 items-center">
                            <input id='terms'
                                   name='terms'
                                   value={formValues.terms}
                                   onChange={onChange} type="checkbox"
                                   className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                        </div>
                        <div className="ml-3">
                            <label htmlFor="Terms"
                                   className="font-poppins text-sm
                            tracking-widest">В рамках федерального закона "О персональных данных" от 27.07.2006 И 152-ФЗ и с учётом представленных данных в Анкета
                                Вы даёте свое согласие на обработку персональных данных </label>
                        </div>
                    </div>
                </form>
                {/*<p className='text-center text-gray-500 text-xs'>&copy;2023 ин-проф</p>*/}
            </div>
        </Tilt>
    )
}

export default LoginInfo