async function apiRequest(
    endpoint,
    method='GET',
    body=null
 ){
 
    const auth =
    await getAuth();
 
    const response =
    await fetch(
 
       `http://localhost:5000${endpoint}`,
 
       {
 
          method,
 
          headers:{
 
             'Content-Type':'application/json',
 
             Authorization:
             auth?.token || ''
 
          },
 
          body:
          body
          ? JSON.stringify(body)
          : null
 
       }
 
    );
 
    return response.json();
 
}