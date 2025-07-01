const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../public/deploy-meta.json");

const data = {
  deployedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
};

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
// console.log("✅ deploy-meta.json written:", data);
