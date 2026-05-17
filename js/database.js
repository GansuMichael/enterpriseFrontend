let db;

const request =
indexedDB.open(
   'GansuDB',
   1
);

request.onupgradeneeded =
(event)=>{

   db = event.target.result;

   if(!db.objectStoreNames.contains('auth')){

      db.createObjectStore(
         'auth',
         {
            keyPath:'id'
         }
      );

   }

   if(!db.objectStoreNames.contains('broiler')){

      db.createObjectStore(
         'broiler',
         {
            keyPath:'id',
            autoIncrement:true
         }
      );

   }

   if(!db.objectStoreNames.contains('layers')){

      db.createObjectStore(
         'layers',
         {
            keyPath:'id',
            autoIncrement:true
         }
      );

   }

   if(!db.objectStoreNames.contains('feedmill')){

      db.createObjectStore(
         'feedmill',
         {
            keyPath:'id',
            autoIncrement:true
         }
      );

   }

};

request.onsuccess =
(event)=>{

   db = event.target.result;

   console.log('IndexedDB Ready');

};