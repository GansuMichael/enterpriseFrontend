async function addRecord(){

    const record = {
 
       date:date.value,
       age:Number(age.value),
       opening:Number(opening.value),
       feed:Number(feed.value),
       weight:Number(weight.value),
       mortality:Number(mortality.value)
 
    };
 
    await saveBroilerRecord(record);
 
    renderBroiler();
 
    syncBroiler();
 
 }
 
 async function renderBroiler(){
 
    const records =
    await getBroilerRecords();
 
    const tbody =
    document.querySelector('#table tbody');
 
    tbody.innerHTML = '';
 
    records.forEach(item=>{
 
       tbody.innerHTML += `
       <tr>
          <td>${item.date}</td>
          <td>${item.age}</td>
          <td>${item.feed}</td>
       </tr>
       `;
 
    });
 
 }