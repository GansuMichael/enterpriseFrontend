const passwordInput =
document.getElementById(
   "password"
);

const togglePassword =
document.getElementById(
   "togglePassword"
);

togglePassword.addEventListener(

   "click",

   () => {

      if(
         passwordInput.type
         === "password"
      ){

         passwordInput.type =
         "text";

      } else {

         passwordInput.type =
         "password";

      }

   }

);