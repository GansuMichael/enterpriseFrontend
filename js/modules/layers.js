async function addProduction(){

    const record = {

        date: pDate.value,

        birds:
        Number(birds.value),

        eggs:
        Number(eggs.value),

        cracked:
        Number(cracked.value),

        mortality:
        Number(
            layersMortality.value
        ),

        feed:
        Number(layersFeed.value),

        cost:
        Number(
            layersFeedCost.value
        ),

        price:
        Number(price.value)

    };

    await saveLayersRecord(record);

    renderLayers();

}

// =====================================
// RENDER
// =====================================

async function renderLayers(){

    const records =
    await getLayersRecords();

    const tbody =
    document.getElementById(
        "prodTable"
    );

    tbody.innerHTML = "";

    let totalEggs = 0;
    let totalRevenue = 0;

    records.forEach(item=>{

        const goodEggs =
        item.eggs - item.cracked;

        const revenue =
        goodEggs * item.price;

        totalEggs += item.eggs;

        totalRevenue += revenue;

        tbody.innerHTML += `
        <tr>
            <td>${item.date}</td>
            <td>${item.eggs}</td>
            <td>${goodEggs}</td>
            <td>${revenue}</td>
        </tr>
        `;

    });

    sumEggs.innerHTML =
    formatNumber(totalEggs);

    sumRevenue.innerHTML =
    formatNumber(totalRevenue);

}