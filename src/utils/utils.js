import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export function notificationAlert(icon, title, text) {

  if (!icon || !title || !text) {
    Swal.fire({ icon: 'error', title: 'Try Again', text: 'Required params not found'});
    console.log("Required params not found");
  }

  Swal.fire({ icon: icon, title: title, text: text });
  
}


export function handleLoginOption(phoneSigninClass, emailSignInClass) {
  const phoneSignIn = document.getElementsByClassName(phoneSigninClass);
  const emailSignIn = document.getElementsByClassName(emailSignInClass);
  let index = 0;
  let index2 = 0;
  
  // console.log(phoneSignIn, emailSignIn);
  for (index; index < phoneSignIn.length; index++) {
    phoneSignIn[index].classList.remove("d-none");
  }

  for (index2; index2 < emailSignIn.length; index2++) {
    emailSignIn[index2].classList.add("d-none");
  }

}


export const isLoggedIn = () => {
  const authData = localStorage.getItem("authtoken");
  if (!authData) return false;

  const parsedAuthData = JSON.parse(authData);
  const currentTime = new Date().getTime();
  if (!parsedAuthData || !parsedAuthData.expirationTime) return false;

  return parsedAuthData.expirationTime > currentTime; // Check if token is still valid
};

export const getUser = () => {
  const user = localStorage.getItem("user");
  
  if (user) {
    const parsedUser = JSON.parse(user);
    // console.log(parsedUser);
    return parsedUser;
  }

  return null; 
};


export const capitalizeWords = (text) => text.replace(/\b\w/g, (match) => match.toUpperCase());
