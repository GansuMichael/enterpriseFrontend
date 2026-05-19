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

 async function syncLayers(){

    const transaction =
    db.transaction(
       ['layers'],
       'readonly'
    );
 
    const store =
    transaction.objectStore('layers');
 
    const request =
    store.getAll();
 
    request.onsuccess = async()=>{
 
       const records =
       request.result;
 
       for(const item of records){
 
          if(!item.synced){
 
             await apiRequest(
                '/api/layers',
                'POST',
                item
             );
 
          }
 
       }
 
    };
 
 }
 
 window.addEventListener(
    'online',
    syncLayers
 );

 async function syncFeedmill(){

    const transaction =
    db.transaction(
       ['feedmill'],
       'readonly'
    );
 
    const store =
    transaction.objectStore('feedmill');
 
    const request =
    store.getAll();
 
    request.onsuccess = async()=>{
 
       const records =
       request.result;
 
       for(const item of records){
 
          if(!item.synced){
 
             await apiRequest(
                '/api/feedmill',
                'POST',
                item
             );
 
          }
 
       }
 
    };
 
 }
 
 window.addEventListener(
    'online',
    syncFeedmill
 );

 async function syncMaster(){

    const transaction =
    db.transaction(
       ['master'],
       'readonly'
    );
 
    const store =
    transaction.objectStore('master');
 
    const request =
    store.getAll();
 
    request.onsuccess = async()=>{
 
       const records =
       request.result;
 
       for(const item of records){
 
          if(!item.synced){
 
             await apiRequest(
                '/api/master',
                'POST',
                item
             );
 
          }
 
       }
 
    };
 
 }
 
 window.addEventListener(
    'online',
    syncMaster
 );