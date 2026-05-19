// ===== save offline data =====
function saveOfflineData(data){
    const transaction =
    db.transaction(
        ["offlineData"],
        "readwrite"
    );
    const store =
    transaction.objectStore(
        "offlineData"
    );
    store.add({
        ...data,
        synced: false,
        createdAt: new Date()
    });
}

// ===== sync Data to server ======
async function syncData(){
    if(!navigator.online){
        console.log("Offline Mode");
        return;
    }
    const transaction =
    db.transaction(
        ["offlineData"],
        "readonly"
    );
    const store =
    transaction.objectStore(
        "offlineData"
    );
    const request = store.getAll();
    request.onsuccess = async () => {
        const records = request.result;
    for(const item of records){
        if(!item.synced){
            try{
                const auth = await getAuth();
                await fetch(
                    "http://localhost:5000/api/sync",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: auth.token
                        },
                        body: JSON.stringify(item)
                    }
                );
                markAsSynced(item.id);
            } catch(error){
                console.log(error);
            }
        }
    }
    }
}

// ======= mark as synced =======
function markAsSynced(id){
    const transaction =
    db.transaction(
        ["offlineData"],
        "readwrite"
    );
    const store =
    transaction.objectStore(
        "offlineData"
    );
    const request =
    store.gat(id);
    request.onsuccess =
    () => {
        const data =
        request.result;
        data.synced = true;
        store.put(data);
    };
}

 window.addEventListener(
    'online',
    syncData
 );