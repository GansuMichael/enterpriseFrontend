import { getFromDB } from "./utils.js";

// ============================
// STATE
// ============================

let broilerData = [];
let layersData = [];
let financeData = [];

// ============================
// INIT ANALYTICS
// ============================

export async function initAnalytics() {

   broilerData = await getFromDB("broiler") || [];
   layersData = await getFromDB("layers") || [];
   financeData = await getFromDB("finance") || [];

   calculateKPIs();
}

// ============================
// CALCULATE KPIs
// ============================

function calculateKPIs() {

   // ======================
   // BROILER KPIs
   // ======================

   let totalFeed = 0;
   let totalMortality = 0;
   let totalWeight = 0;

   broilerData.forEach(d => {
      totalFeed += d.feed || 0;
      totalMortality += d.mortality || 0;
      totalWeight += d.weight || 0;
   });

   const fcr =
      totalWeight > 0
      ? totalFeed / totalWeight
      : 0;

   document.getElementById("fcr").textContent =
      fcr.toFixed(2);

   document.getElementById("sumFeed").textContent =
      totalFeed;

   document.getElementById("sumMort").textContent =
      totalMortality;

   // ======================
   // FINANCE KPIs
   // ======================

   let revenue = 0;
   let expenses = 0;

   financeData.forEach(f => {

      revenue += f.amount || 0;

      if (f.type === "expense") {
         expenses += f.amount || 0;
      }

   });

   const profit = revenue - expenses;

   document.getElementById("profit").textContent =
      profit;

   document.getElementById("sumSales").textContent =
      revenue;

   document.getElementById("bSumExpenses").textContent =
      expenses;

   // ======================
   // LAYERS KPIs
   // ======================

   let eggs = 0;
   let mortality = 0;

   layersData.forEach(l => {
      eggs += l.eggs || 0;
      mortality += l.mortality || 0;
   });

   document.getElementById("dEggs").textContent = eggs;
   document.getElementById("dMortality").textContent = mortality;

   // ======================
   // MASTER DASHBOARD
   // ======================

   document.getElementById("mTotalEggs").textContent = eggs;
   document.getElementById("mTotalFeed").textContent = totalFeed;
   document.getElementById("mTotalMortality").textContent = mortality;

   document.getElementById("mRevenue").textContent = revenue;
   document.getElementById("mExpenses").textContent = expenses;
   document.getElementById("mProfit").textContent = profit;

   // AI Insight (simple rule-based engine)
   generateInsights(fcr, mortality, profit);
}

// ============================
// AI INSIGHT ENGINE
// ============================

function generateInsights(fcr, mortality, profit) {

   let msg = "";

   if (fcr > 2.2) {
      msg += "⚠ Feed conversion is high. Optimize feed mix. ";
   }

   if (mortality > 5) {
      msg += "⚠ Mortality rate is above normal. Check health conditions. ";
   }

   if (profit < 0) {
      msg += "❌ Business is running at a loss. Reduce costs or increase pricing. ";
   }

   if (msg === "") {
      msg = "✅ System is performing well. Keep monitoring trends.";
   }

   document.getElementById("aiBusiness").textContent = msg;
}