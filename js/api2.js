async function apiRequest(
    endpoint,
    method='GET',
    body=null
 ){
 
    const auth =
    await getAuth();

    const options = {
        method,
        headers:{
        "Content-Type":"appication/json",
        Authorization:auth?.token || ""
        }
    };

    if(body){
        options.body = JSON.stringify(body);
    }
 
    const response =
    await fetch(
 
       `http://localhost:5000${endpoint}`,
       
       options
 
    );
 
    return response.json();
 
}