import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Tilt from "react-parallax-tilt";
import ParticlesAuth from "../../components/Particles/Particle/ParticleAuth";

const TeamLeaderInfos = ({ onChange, formValues }) => {
    return(
        <Tilt>
            <div
                className='container h-106 w-96 bg-white bg-opacity-10 rounded-2xl
            shadow-5xl relative z-2 border border-opacity-30 border-r-0
            border-b-0 backdrop-filter backdrop-blur-sm'
            >

                <form action="" className='
                h-full flex flex-col justify-evenly items-center
                '>
                    <div
                        className='grid place-content-center
                            items-center text-center
                            hover:text-left'
                    >
                        <h1
                            className='text-white font-poppins text-2xl
                            tracking-widest'>
                            <AdminPanelSettingsIcon/> Информация о руководителе команды
                        </h1>
                    </div>
                    <div className="mb-2">
                        <label
                            className="text-white font-poppins text-2xl
                            tracking-widest" htmlFor="Name"
                        >
                            Фамилия
                        </label>
                        <input
                            type='text'
                            id='leaderLastName'
                            name='leaderLastName'
                            value={formValues.leaderLastName}
                            onChange={onChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            className="text-white font-poppins text-2xl tracking-widest"
                            htmlFor="LastName">Имя</label>
                        <input
                            type='text'
                            id='leaderName'
                            name='leaderName'
                            value={formValues.leaderName}
                            onChange={onChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            className="text-white font-poppins text-2xl tracking-widest"
                            htmlFor="Patronymic">отчество</label>
                        <input
                            type='text'
                            id='leaderPatronymic'
                            name='leaderPatronymic'
                            value={formValues.leaderPatronymic}
                            onChange={onChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                        />
                    </div>
                </form>
            </div>
        </Tilt>
    )
}

export default TeamLeaderInfos