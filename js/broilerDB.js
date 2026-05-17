async function saveBroilerRecord(record){

    const transaction =
    db.transaction(
       ['broiler'],
       'readwrite'
    );
 
    const store =
    transaction.objectStore('broiler');
 
    store.add({
 
       ...record,
       synced:false,
       createdAt:new Date()
 
    });
 
 }
 
 async function getBroilerRecords(){
 
    return new Promise((resolve)=>{
 
       const transaction =
       db.transaction(
          ['broiler'],
          'readonly'
       );
 
       const store =
       transaction.objectStore('broiler');
 
       const request =
       store.getAll();
 
       request.onsuccess = ()=>{
 
          resolve(request.result);
 
       };
 
    });
 
 }