// =====================================
// SAVE FEED RECORD
// =====================================

async function saveFeedRecord(record){

    const transaction =
    db.transaction(
        ["feedmill"],
        "readwrite"
    );

    const store =
    transaction.objectStore(
        "feedmill"
    );

    store.add({

        ...record,

        synced:false,

        createdAt:
        new Date()

    });

}

// =====================================
// GET FEED RECORDS
// =====================================

async function getFeedRecords(){

    return new Promise((resolve)=>{

        const transaction =
        db.transaction(
            ["feedmill"],
            "readonly"
        );

        const store =
        transaction.objectStore(
            "feedmill"
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