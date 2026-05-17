async function syncBroiler(){

    const transaction =
    db.transaction(
       ['broiler'],
       'readonly'
    );
 
    const store =
    transaction.objectStore('broiler');
 
    const request =
    store.getAll();
 
    request.onsuccess = async()=>{
 
       const records =
       request.result;
 
       for(const item of records){
 
          if(!item.synced){
 
             await apiRequest(
                '/api/broiler',
                'POST',
                item
             );
 
          }
 
       }
 
    };
 
 }
 
 window.addEventListener(
    'online',
    syncBroiler
 );