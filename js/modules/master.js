async function refreshMasterDashboard(){

    const broilers =
    await getBroilerRecords();

    const layers =
    await getLayersRecords();

    const feed =
    await getFeedRecords();

    let birds = 0;
    let eggs = 0;
    let feedUsed = 0;

    broilers.forEach(item=>{

        birds +=
        item.opening || 0;

        feedUsed +=
        item.feed || 0;

    });

    layers.forEach(item=>{

        eggs +=
        item.eggs || 0;

        birds +=
        item.birds || 0;

    });

    feed.forEach(item=>{

        feedUsed +=
        item.qty || 0;

    });

    mTotalBirds.innerHTML =
    formatNumber(birds);

    mTotalEggs.innerHTML =
    formatNumber(eggs);

    mTotalFeed.innerHTML =
    formatNumber(feedUsed);

}

refreshMasterDashboard();