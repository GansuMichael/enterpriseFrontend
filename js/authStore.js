function saveAuth(token,user){

    const transaction =
    db.transaction(
       ['auth'],
       'readwrite'
    );
 
    const store =
    transaction.objectStore('auth');
 
    store.put({
 
       id:1,
       token,
       user
 
    });

    console.log("Auth Saved");
 
}

async function saveAuth(token,user){

    const transaction =
    db.transaction(
       ['auth'],
       'readwrite'
    );
 
    const store =
    transaction.objectStore('auth');
 
    store.put({
 
       id:1,
       token,
       user
 
    });

    console.log("Auth Saved");
 
}
 
function getAuth(){
 
    return new Promise((resolve, reject)=>{
 
       const transaction =
       db.transaction(
          ['auth'],
          'readonly'
       );
 
       const store =
       transaction.objectStore('auth');
 
       const request =
       store.get(1);
 
       request.onsuccess = ()=>{
 
          resolve(request.result);
 
       };

       request.onerror =
       () => {
           reject("Error getting auth");
       };
 
    });
 
}

 async function getAuth(){
 
    return new Promise((resolve)=>{
 
       const transaction =
       db.transaction(
          ['auth'],
          'readonly'
       );
 
       const store =
       transaction.objectStore('auth');
 
       const request =
       store.get(1);
 
       request.onsuccess = ()=>{
 
          resolve(request.result);
 
       };
 
    });
 
 }

 function removeAuth(){

    const transaction =
    db.transaction(
       ['auth'],
       'readwrite'
    );

    const store =
    transaction.objectStore('auth');

    store.delete(1);

    console.log("Logged Out");
 }

 async function removeAuth(){

    const transaction =
    db.transaction(
       ['auth'],
       'readwrite'
    );

    const store =
    transaction.objectStore('auth');

    store.delete(1);

    console.log("Logged Out");
 }

 function deleteToken(){

    const transaction =
    db.transaction(
       ['auth'],
       'readwrite'
    );

    const store =
    transaction.objectStore('auth');

    store.delete(1);

    console.log("Token Removed");
 }
