async function addIngredient(){

    const record = {

        ingredient:
        ingredient.value,

        qty:
        Number(qty.value),

        protein:
        Number(protein.value),

        energy:
        Number(energy.value),

        fiber:
        Number(fiber.value)

    };

    await saveFeedRecord(record);

    renderFeed();

}

// =====================================
// RENDER FEED
// =====================================

async function renderFeed(){

    const records =
    await getFeedRecords();

    const list =
    document.getElementById(
        "formulaList"
    );

    list.innerHTML = "";

    records.forEach(item=>{

        list.innerHTML += `
        <li>
            ${item.ingredient}
            -
            ${item.qty}kg
        </li>
        `;

    });

}