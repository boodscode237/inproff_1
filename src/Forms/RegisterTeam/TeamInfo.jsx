import PeopleIcon from '@mui/icons-material/People';
import Tilt from "react-parallax-tilt";

const TeamInfos = ({ formValues, onChange} ) => {
    return(
        <Tilt>
            <div className='container h-116 w-96 bg-white bg-opacity-10 rounded-2xl
            shadow-5xl relative z-2 border border-opacity-30 border-r-0
            border-b-0 backdrop-filter backdrop-blur-sm'>
                <form action="" className='h-full flex flex-col justify-evenly items-center'>
                    <div
                        className='grid place-content-center
                        items-center text-center
                        hover:text-left mb-4'
                    >
                        <h1 className='text-white font-poppins text-2xl
                            tracking-widest'>
                            <PeopleIcon/> Информация о команде
                        </h1>
                    </div>
                        {/*<div className='grid grid-flow-col auto-rows-max gap-4'>*/}
                        <div className="">
                            <label
                                className="text-white font-poppins text-2xl
                            tracking-widest"
                                htmlFor="Name of the group">Название команды</label>
                            <input
                                type='text'
                                id='teamName'
                                name='teamName'
                                value={formValues.teamName}
                                onChange={onChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"/>
                        </div>
                        <div className="mb-2 row-span-2">
                            <label
                                className="text-white font-poppins text-2xl
                            tracking-widest"
                                htmlFor="Email team">Электронная почта</label>
                            <input
                                type='email'
                                id='teamEmail'
                                name='teamEmail'
                                value={formValues.teamEmail}
                                onChange={onChange}
                                className="shadow appearance-none border rounded w-full py-2 px-1 text-gray-700"
                            />
                        </div>

                    <div className="mb-2">
                        <label
                            className="text-white font-poppins text-2xl
                            tracking-widest"
                            htmlFor="educational organization">Образовательная организация</label>
                        <textarea
                            type='text'
                            id='teamInstitution'
                            name='teamInstitution'
                            value={formValues.teamInstitution}
                            onChange={onChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"/>
                    </div>
                    <div className="mb-2">
                        <label
                            className="text-white font-poppins text-2xl
                            tracking-widest"
                            htmlFor="town">Город/Поселок</label>
                        <input
                            type='text'
                            id='teamCity'
                            name='teamCity'
                            value={formValues.teamCity}
                            onChange={onChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"/>
                    </div>
                    <div className="mb-4">
                        <label
                            className="text-white font-poppins text-2xl
                            tracking-widest"
                            htmlFor="Patronymic">Состав команды и роли</label>
                        <div
                            className='text-white font-poppins text-sm
                            tracking-widest'>
                        Формат:
                        <ul >
                            <li>ИВАН ИВАНОВ: руководитель,</li>
                            <li>ЕВГЕНИЙ ЕВГЕВИЧ: аналитик,</li>
                            <li>Дональд Дональдович: дизайнер,</li>
                            <li>...</li>
                        </ul>
                    </div>
                        <textarea
                            type='text'
                            id='teamMembers'
                            name='teamMembers'
                            value={formValues.teamMembers}
                            onChange={onChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"/>
                    </div>

                </form>
            </div>
        </Tilt>
    )
}

export default TeamInfos