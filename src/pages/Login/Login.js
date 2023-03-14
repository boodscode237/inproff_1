import Tilt from 'react-parallax-tilt';
import {useAuth} from "../../context/AuthContext";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
export default function Login() {
    const {login} = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState()
    const navigate = useNavigate()
    // const initialValues = {
    //     email: "",
    //     password: ""
    // }
    // const [values, setValues] = useState({initialValues})

    // const {email, password} = values
    const handleSubmit = async(e) => {
        e.preventDefault()

        setError()
        await login(email, password).then((res) => {
            console.log(res)
            navigate('/lk')
        }).catch((err) => {
            setError(err.message)
            // console.log(err.message)
        })
    }

    // const onChange = (event) => {
    //     const {values} = event.target;
    //     setValues({...values})
    // }

    return (
        <div className="login">
            {/*<ParticlesBackground />*/}
            <div className="App bg-gray-900 h-screen relative overflow-hidden flex justify-center items-center">
                <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
                <div className="h-35-r w-35-r bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div>
                <Tilt>
                    <div className="container h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
                        <form className='h-full flex flex-col justify-evenly items-center' onSubmit={handleSubmit}>
                            <div className='text-white font-poppins text-2xl tracking-widest'>Войти</div>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type={"email"} placeholder='username' className='input-text'/>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type={"password"} placeholder='password' className='input-text'/>
                            <input type="submit" className='cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 '/>
                        </form>
                    </div>
                </Tilt>
            </div>

        </div>
    )
}