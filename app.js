
let leads = [];
let leaderboard = {};

function addLead() {
  const name = document.getElementById("name").value;
  const contact = document.getElementById("contact").value;
  const service = document.getElementById("service").value;
  const rep = document.getElementById("rep").value;
  if (!name || !rep) return;

  const row = document.createElement("tr");
  [name, contact, service, rep].forEach(val => {
    const td = document.createElement("td");
    td.textContent = val;
    row.appendChild(td);
  });
  document.querySelector("#leadTable tbody").appendChild(row);

  leads.push({ name, contact, service, rep });
  leaderboard[rep] = (leaderboard[rep] || 0) + 1;
  updateLeaderboard();
}

function updateLeaderboard() {
  const sorted = Object.entries(leaderboard).sort((a, b) => b[1] - a[1]);
  document.getElementById("leaderboard").innerText = sorted.map(([rep, count], i) =>
    `${i + 1}. ${rep} - ${count} leads`).join("\n");
}

function askAI() {
  const input = document.getElementById("aiInput").value.toLowerCase();
  let response = "🤖 I’m not sure yet, please rephrase.";

  if (input.includes("resin")) response = "We offer UV-stable resin driveways with 25-year durability.";
  if (input.includes("properla")) response = "ProPerla is a hydrophobic wall coating that protects for 25 years.";
  if (input.includes("where")) response = "We serve Dorset, Hampshire, Wiltshire and surrounding areas.";
  if (input.includes("quote")) response = "We can book a free site visit and provide a digital quote.";
  if (input.includes("decking")) response = "Our composite decking is low-maintenance and durable.";
  if (input.includes("price")) response = "Pricing depends on service and size, starting from £85/m² for resin.";

  document.getElementById("aiOutput").innerText = response;
}
