import Swal from "sweetalert2";


export function notificationAlert(icon, title, text) {

    Swal.fire({ icon, title, text });
  
    if (!icon || !title || !text) {
      Swal.fire({ icon: 'error', title: 'Try Again', text: 'Required params not found'});
      console.log("Required params not found");
    }
  
}