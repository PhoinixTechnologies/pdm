import Swal from "sweetalert2";


export function notificationAlert(icon, title, text) {

    Swal.fire({ icon, title, text });
  
    if (!icon || !title || !text) {
      Swal.fire({ icon: 'error', title: 'Try Again', text: 'Required params not found'});
      console.log("Required params not found");
    }
  
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
