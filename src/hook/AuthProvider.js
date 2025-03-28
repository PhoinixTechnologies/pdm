import { useContext, createContext, useState } from "react";
import Swal from "sweetalert2";
import { RESPONSE_STATES } from "../utils/constants.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { config } from "../config";

const AuthContext = createContext();


const AuthProvider = ({children}) => {

    const apiUrl = config().baseUrl;

    const [user, setUser] = useState(localStorage.getItem("user") || null);
    const [token, setToken] = useState(localStorage.getItem("authtoken") || "");
    const navigate = useNavigate();


    const loginAction = async (data) => {
        try {

            const apiConfig = {
                method: 'POST',
                url: `${apiUrl}auth/login`,
                data
            }

            const result = await axios(apiConfig);
            console.log(result.data.data.user, result.status);

            if (result.status === 200) {
                setUser(result.data.data.user);
                setToken(result.data.data.tokens);
                localStorage.setItem("authtoken", result.data.data.tokens);
                localStorage.setItem("user", JSON.stringify(result.data.data.user));

                let usersFirstname = result.data.data.user.fullname.split(' ');
                let getName = usersFirstname[0];
                Swal.fire({ icon: 'success', title: 'Welcome back', text: 'Hi ' + getName + ', It\'s nice to have you back. ', });

                navigate("/dashboard");

            } else {
                return RESPONSE_STATES.error;
            }
            

        } catch (error) {

            if (error.response) {
                // alert(error.response.data.message);
                Swal.fire({ icon: 'error', title: 'Please, try again', text: error.response.data.message, });
                return;
            } else {
                // alert(error.message);
                Swal.fire({ icon: 'error', title: 'Sorry, Try Again', text: error.message, });
            }
        }
    };

    const logOut = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("user");
        localStorage.removeItem("authtoken");
        navigate("/");
    };

    return (
        <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
}
