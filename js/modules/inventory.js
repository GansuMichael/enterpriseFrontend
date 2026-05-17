import { saveToDB, getFromDB, deleteAllDB } from "./utils.js";
import { api } from "./api.js";

// ============================
// INVENTORY STATE
// ============================

let inventory = [];

// ============================
// INIT
// ============================

export async function initInventory() {
   inventory = await getFromDB("inventory") || [];
   renderInventory();
}

// ============================
// ADD ITEM
// ============================

export async function addInventory() {

   const item = {
      id: Date.now(),
      date: document.getElementById("invDate").value,
      name: document.getElementById("invName").value,
      qty: Number(document.getElementById("invQty").value),
      price: Number(document.getElementById("invPrice").value),
      total: 0
   };

   item.total = item.qty * item.price;

   inventory.push(item);

   await saveToDB("inventory", inventory);

   // sync to backend (optional)
   try {
      await api.post("/inventory", item);
   } catch (e) {
      console.log("Offline mode: saved locally");
   }

   renderInventory();
}

// ============================
// DELETE ALL
// ============================

export async function resetInventory() {

   inventory = [];

   await deleteAllDB("inventory");

   try {
      await api.delete("/inventory/all");
   } catch (e) {}

   renderInventory();
}

// ============================
// RENDER UI
// ============================

function renderInventory() {

   const list = document.getElementById("inventoryList");

   if (!list) return;

   list.innerHTML = "";

   inventory.forEach(item => {

      const li = document.createElement("li");

      li.innerHTML = `
         <strong>${item.name}</strong>
         | Qty: ${item.qty}
         | Price: ${item.price}
         | Total: ${item.total}
      `;

      list.appendChild(li);

   });
}