import { useContext, createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
import config from "../config";
import Swal from "sweetalert2";
import { RESPONSE_STATES } from "../utils/constants.js";
import axios from "axios";

const AuthContext = createContext();


const AuthProvider = ({children}) => {

    const apiUrl = config().baseUrl;

    const [user, setUser] = useState(localStorage.getItem("user") || null);
    const [token, setToken] = useState(localStorage.getItem("authtoken") || "");
    // const navigate = useNavigate();


    const loginAction = async (data) => {
        try {

            const apiConfig = {
                method: 'POST',
                url: `${apiUrl}/ashopree/auth/login`,
                data
            }

            const result = await axios(apiConfig);
            // console.log(result.data.data);

            if (result.data.data.accountType === "Merchant") {

                window.location.href = `https://paysprint.ca/ashopree/auth/merchant-redirect/${result.data.data.apiToken}`;
                
            } else {
                if (result.data.status === 200) {
                    setUser(result.data.data);
                    setToken(result.data.data.apiToken);
                    localStorage.setItem("authtoken", result.data.data.apiToken);
                    localStorage.setItem("user", JSON.stringify(result.data.data));

                    let usersFirstname = result.data.data.name.split(' ');
                    let getName = usersFirstname[1];
                    Swal.fire({ icon: 'success', title: 'Welcome back', text: 'Hi ' + getName + ', It\'s nice to have you back. ', });

                    // navigate("/");

                } else {
                    return RESPONSE_STATES.error;
                }
            }
            

        } catch (error) {

            if (error.response) {
                // alert(error.response.data.message);
                Swal.fire({ icon: 'error', title: 'Please, try again', text: error.message, });
                return;
            } else {
                // alert(error.message);
                Swal.fire({ icon: 'error', title: 'Sorry, Try Again', text: error.message, });
            }
        }
    };

    const loginActionWithEmail = async (data) => {

        try {

            const apiConfig = {
                method: 'POST',
                url: `${apiUrl}/login`,
                data,
                headers: { Authorization: "Bearer base64:JFM+PJaWD/pBypX+NhXudDrAmianZdGYZ41qz4WhXL0=" }
            }

            const result = await axios(apiConfig);
            const userData  = result.data;

            console.log(userData);

            if (userData.status === 200) {
                setUser(userData.data);
                setToken(userData.data.apiToken);
                localStorage.setItem("authtoken", userData.data.apiToken);
                localStorage.setItem("user", JSON.stringify(userData.data));

                let getName = (userData.data.name.split(' '));

                Swal.fire({
                    icon: 'success',
                    title: userData.message,
                    text: 'Hello ' + getName[0] + ', you are welcome, It\'s nice to have you back. ',
                });

                // navigate("/");
                return RESPONSE_STATES.success;

            } else {

                Swal.fire({ icon: 'error', title: 'Try again', text: 'Invalid Credentials', });
                return RESPONSE_STATES.error;
            }

        } catch (error) {
            if (error.response) {

                Swal.fire({ icon: 'error', title: 'Please, try again', text: error.message, });
            } else {
    
                Swal.fire({ icon: 'error', title: 'Sorry, Try Again', text: error.message, });
            }
        }
    };

    const logOut = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("user");
        localStorage.removeItem("authtoken");
        // navigate("/get-started");
    };

    return (
        <AuthContext.Provider value={{ token, user, loginAction, loginActionWithEmail, logOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
}
