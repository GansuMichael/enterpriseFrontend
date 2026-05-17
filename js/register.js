const registerForm =
document.getElementById(
   "registerForm"
);

registerForm.addEventListener(

   "submit",

   async (e) => {

      e.preventDefault();

      const name =
      document.getElementById(
         "name"
      ).value;

      const email =
      document.getElementById(
         "email"
      ).value;

      const password =
      document.getElementById(
         "password"
      ).value;

      try{

         const data =
         await apiRequest(

            "/api/auth/register",

            "POST",

            {

               name,
               email,
               password

            }

         );

         alert(
            "Registration Successful"
         );

         window.location.href =
         "./login.html";

      } catch(error){

         console.log(error);

      }

   }

);