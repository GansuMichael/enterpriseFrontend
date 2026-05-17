// =====================================
// SAVE LAYERS RECORD
// =====================================

async function saveLayersRecord(record){

    const transaction =
    db.transaction(
        ["layers"],
        "readwrite"
    );

    const store =
    transaction.objectStore(
        "layers"
    );

    store.add({

        ...record,

        synced: false,

        createdAt:
        new Date()

    });

}

// =====================================
// GET LAYERS RECORDS
// =====================================

async function getLayersRecords(){

    return new Promise((resolve)=>{

        const transaction =
        db.transaction(
            ["layers"],
            "readonly"
        );

        const store =
        transaction.objectStore(
            "layers"
        );

        const request =
        store.getAll();

        request.onsuccess =
        ()=>{

            resolve(
                request.result
            );

        };

    });

}