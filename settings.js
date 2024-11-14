/*
   Created By ArxzyDev
   My Contact wa.me/6289513081052
*/

const fs = require("fs");
const chalk = require("chalk");

/* ~~~~~~~~~ WEB API ~~~~~~~~~ */
global.lol = ""; // https://api.lolhuman.xyz
global.xzn = ""; // https://xnz.wtf
/* ~~~~~~~~~ SETTINGS OWNER ~~~~~~~~~ */
global.numberowner = "62895422604542"; // Owner Utama
global.owner = ["62895422604542"]; // Owner Lainnya
global.namaowner = "f1qxzz."; // Nama Owner
global.premium = ["6289643780393"]; // Premium User
global.nobot = "6287787968135";
/* ~~~~~~~~~ SETTINGS BOT ~~~~~~~~~ */
global.namabot = "f1qxzz V2"; // NickBot
global.typemenu = "v2"; // 'v1' > 'v2' > 'v3' > 'v4'
global.typereply = "v1"; // 'v1' > 'v2'
global.autoread = false; // ReadChat
global.autobio = false; // AutoBio
global.autoblok212 = true; // AutoBlock Nomer +212
global.onlyindo = false; // AutoBlock Selain Nomer Indo
global.packname = "Copyright © 2024"; // Watermark Sticker
global.author = "f1qxzz"; // Watermark Sticker
/* ~~~~~~~~~ MESSAGES ~~~~~~~~~ */
global.mess = {
  done: "Done ✅",
  prem: "Feature Only For User _*PREMIUM*_",
  admin: "Feature Only for _*Admin Group*_",
  botAdmin:
    "Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !",
  owner: "Feature Only for _*owner*_",
  group: "Feature Only for _*Group Chat*_",
  private: "Feature Only for _*Private Chat*_",
  wait: "Wait a Moment, for Process",
  error: "_*Sorry Features Error*_",
};
/* ~~~~~~~~~ THUMBNAIL ~~~~~~~~~ */
global.thumb = fs.readFileSync("./media/quoted.jpg");
global.menu = fs.readFileSync("./media/menu.jpg");
/* ~~~~~~~~~ EDITS LINK ~~~~~~~~~ */
global.link = "https://github.com/f1qxzz/";
/* ~~~~~~~~~ END SYSTEM ~~~~~~~~~ */
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
