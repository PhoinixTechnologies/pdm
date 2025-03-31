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
            // console.log(result.data.data.user, result.status);

            if (result.status === 200) {
                setUser(result.data.data.user);
                setToken(result.data.data.tokens);
                localStorage.setItem("authtoken", JSON.stringify(result.data.data.tokens));
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

    const registerAction = async (data) => {
        try {

            const apiConfig = {
                method: 'POST',
                url: `${apiUrl}auth/register`,
                data
            }

            const result = await axios(apiConfig);

            if (result.status === 201 && result.statusText === "Created") {
                let usersFirstname = result.data.user.fullname.split(' ');
                let getName = usersFirstname[0];
                Swal.fire({ icon: 'success', title: 'You are most Welcome!', text: 'Hello ' + getName + ', It\'s so good to have you join us, I hope we have a great time together. Please check your mailbox for further instructions as you login :) ', });

                sendEmailVerification(result.data.user.email);
                navigate("/login");

            } else {
                return RESPONSE_STATES.error;
            }
            

        } catch (error) {

            if (error.response) {
                Swal.fire({ icon: 'error', title: 'Please, try again', text: error.response.data.message, });
                return;
            } else {
                // alert(error.message);
                Swal.fire({ icon: 'error', title: 'Sorry, Try Again', text: error.message, });
            }
        }
    };


    const sendEmailVerification = async (email) => {
        try {

            const apiConfig = {
                method: 'POST',
                url: `${apiUrl}auth/send-verification-email?email=${email}`,
            }

            const result = await axios(apiConfig);

            if (result.status === 200 && result.statusText === "OK") {
                Swal.fire({ icon: 'success', title: 'Success!', text: result.data.message, });
                navigate("/login");

            } else {
                Swal.fire({ icon: 'error', title: 'Error!', text: 'Sorry we could not send a verification message to you, kindly request for it manually from your dashboard', });
                return RESPONSE_STATES.error;
            }
            

        } catch (error) {

            if (error.response) {
                Swal.fire({ icon: 'error', title: 'Please, try again', text: error.response.data.message, });
                return;
            } else {
                // alert(error.message);
                Swal.fire({ icon: 'error', title: 'Sorry, Try Again', text: error.message, });
            }
        }
    };

    
    const logOut = async (data) => {
        try {

            const apiConfig = {
                method: 'POST',
                url: `${apiUrl}auth/logout`,
                data
            }

            const result = await axios(apiConfig);

            if (result.status === 204 && result.statusText === "No Content") {
                setUser(null);
                setToken("");
                localStorage.removeItem("user");
                localStorage.removeItem("authtoken");

                Swal.fire({ icon: 'success', title: 'I will miss you :(', text: 'See you next time pal!', });

                navigate("/");
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

    return (
        <AuthContext.Provider value={{ token, user, registerAction, loginAction, sendEmailVerification, logOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
}
