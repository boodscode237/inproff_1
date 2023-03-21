import {useState} from "react";
import TeamLeaderInfos from "./RegisterTeam/TeamLeaderInfos";
import TeamInfos from "./RegisterTeam/TeamInfo";
import LoginInfo from "./RegisterTeam/LoginInfo";
import TeamComposition from "./RegisterTeam/TeamComposition";
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ButtonComponent from "../components/button/Button.Component";
import {useAuth} from '../context/AuthContext'
import {Link, useNavigate} from 'react-router-dom'
import {db} from "../utils/firebase/firebase-utils";
import {
    collection,
    addDoc
} from "firebase/firestore";

const ParentComponent = () => {
    const formList = ['Информация о руководителе группы', 'Информация о команде', 'Данные для входа', "Состав команды"]
    const [page, setPage] = useState(0)
    const [error, setError] = useState('')
    const formLength = formList.length
    const {register} = useAuth()
    const  navigate = useNavigate()
    const usersCollectionRef = collection(db, "users");

    const initialValues = {
        leaderName: "",
        leaderLastName: "",
        leaderPatronymic: "",
        teamName: "",
        teamEmail: "",
        teamInstitution: "",
        teamCity: "",
        teamMembers: '',
        username: "",
        password: "",
        confirmPassword: "",
        terms: false,
    }

    const [values, setValues] = useState({initialValues})


    const handlePreview = () => {
        setPage(page === 0 ? formLength - 1 : page - 1)
    }
    const handleNext = () => {
        setPage(page === formLength - 1 ? 0 : page + 1)
    }
    console.log(page)

    const handleFormDisplay = () => {
        switch (page){
          case 0: {
              return (
                  <TeamLeaderInfos formValues={values} onChange={onChange}/>
              );
          }
          case 1: {
              return <TeamInfos formValues={values} onChange={onChange}/>;
          }
            case 2: {
                return <TeamComposition formValues={values} onChange={onChange}/>;
            }
          case 3: {
              return <LoginInfo formValues={values} onChange={onChange}/>;
          }


            default:
                return null;
        }
    }

    const onChange = (event) => {
        const {name, value, type, checked} = event.target;
        setValues({...values, [name]: type === "checkbox" ? checked : value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError('')
        console.log('values', values)
        if (values.password !== values.confirmPassword){
            setError("Пароль не совпадает")
        }else{
            await register(values.teamEmail, values.password, values).then((res) => {
                navigate('/login')
            }).catch ((e) => {
                setError(e.message)
                console.log('error registering',e.message)
            })

        }

    }

    const setForm = (e) => {
        const name = e.target.innerHTML
        switch (name){
            case "О руководителе": {
                return setPage(0);
            }
            case "О команде": {
                return setPage(1);
            }
            case "Состав команды": {
                return setPage(2);
            }
            case "Для входа": {
                return setPage(3);
            }
            default: {
                return setPage(0)
            }

        }
    }

    return(
        <div className="App bg-gray-900 h-screen relative overflow-x-auto object-fit flex justify-center items-center">
            <div className="grid gap-4 place-content-center item-center h-screen place-items-center ">
                <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
                <div className="h-35-r w-35-r bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>

                <div>{handleFormDisplay()}</div>
            <div className='bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm'>&copy;2023 ин-проф</div>
            <div className='flex justify-between items-center'>
                <div className='grid grid-cols-2 place-content-center item-center'>
                    {page !== 0 && <ButtonComponent
                        handleClick={handlePreview}
                        arrow={<ArrowBackIcon/>}
                    />}
                </div>
                { page === formLength - 1 ? (
                    <div>
                    <ButtonComponent handleClick={handleSubmit} arrow={<p>Зарегистрировать вашу команду</p>}/>
                    </div>
                ) : (
                    <div>
                        <ButtonComponent handleClick={handleNext} arrow={<ArrowForwardIcon />} />
                    </div>
                ) }

            </div>
            </div>

        </div>
    )
}

export default ParentComponent