import { useContext, useState } from "react";
import { BiSolidShow } from "react-icons/bi";
import { FaEyeSlash } from "react-icons/fa";
import { AlertMessage } from "../AlertMessage/AlertMessage";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('');
    const [variant, setVariant] = useState<'error' | 'success'>('error');
    const {setLoggedIn} = useContext(AppContext);
    const navigate = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'username') {
            setLogin(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleVerififyLogin = (login: string, password: string) => {
        if (login === 'renan' && password === '123') {
            handleEnter();
            setVariant('success');
            setMessage('Login successful!');
            setLoggedIn(true);
        } else {
            setVariant('error');
            setMessage('Usuário não cadastrado!');
            setLoggedIn(false);
        }
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleEnter = () => {
        console.log(login, password)
        navigate('/');
    }

    return (
        <div className="p-4 border border-collapse w-3/12 text-white flex flex-col items-center justify-center rounded-xl">
            <h1 className="text-4xl">Login</h1>
            <form className="text-1xl text space-y-2">
                <label>Username:</label><br />
                <input
                    className="text-black rounded-lg w-64 outline-none focus:ring-2 focus:ring-blue-400 p-1"
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={login}
                    onChange={handleInputChange} />
                <br />

                <label>Password:</label>
                <div className="flex items-center space-0">
                    <input
                        className="text-black rounded-l-lg w-56 focus:ring-2 focus:ring-blue-400 p-1 mr-1"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />
                    <div className="bg-white p-1 rounded-r-lg">
                        {showPassword ? (
                            <BiSolidShow
                                className="h-6 w-6 text-gray-500 cursor-pointer"
                                onClick={toggleShowPassword}
                            />
                        ) : (
                            <FaEyeSlash
                                className="h-6 w-6 text-gray-500 cursor-pointer"
                                onClick={toggleShowPassword}
                            />
                        )}
                    </div>
                </div>
            </form>

            {message && (
                <AlertMessage message={message} variant={variant} setMessage={setMessage} />
            )}

            <button
                className="bg-blue-400 hover:bg-blue-500 active:bg-blue-800 focus:bg-blue-500 text-white rounded-lg w-64 p-2 mt-3"
                onClick={() => handleVerififyLogin(login, password)}
            >Enter
            </button>
        </div>
    );
};

export default Login;
