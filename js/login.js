loginForm.addEventListener(

    'submit',
 
    async(e)=>{
 
       e.preventDefault();
 
       const data =
       await apiRequest(
 
          '/api/auth/login',
 
          'POST',
 
          {
             email:email.value,
             password:password.value
          }
 
       );
 
       await saveAuth(
          data.token,
          data.user,
          data.subscription
       );
 
       location.href =
       './dashboard.html';
 
    }
 
 );