module.exports.config = {
 name: "call",
 version: "1.0.0",
 role: 2,
 author: "Yeasin", //don't change my credit 
 description: "কল বোম্বার, শুধুমাত্র বাংলাদেশি নাম্বারের জন্য",
 category: "Tool",
 guide: "/call 01xxxxxxxxx",
 cooldowns: 15,
 guide: { "axios": "" }
};
 
module.exports.onStart = async ({ api, event, args }) => {
 const axios = require('axios');
 const number = args[0];
 
 if (!number || !/^01[0-9]{9}$/.test(number)) {
 return api.sendMessage("অনুগ্রহ করে সঠিক বাংলাদেশি নাম্বার দিন (উদাহরণ: /call 01xxxxxxxxx) দয়া করে কেউ খারাপ কাজে ব্যবহার করবেন না 🙂,\n ফাইলটি শুধুমাত্র মজা করার উদ্দেশ্যে তৈরি করা হয়েছে।", event.threadID, event.messageID);
 }
 
 api.sendMessage(`✅—͟͟͞͞𝙲𝙰𝙻𝙻 𝙸𝚂 𝙽𝙾𝚆 𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻𝙻𝚈 𝙱𝙾𝚂𝚂- ${number} 𝚃𝙷𝙸𝚂 𝙽𝚄𝙼𝙱𝙴𝚁-🎀\n`, event.threadID, async (err, info) => {
 try {
 const response = await axios.get(`https://tbblab.shop/callbomber.php?mobile=${number}`);
 setTimeout(() => {
 api.unsendMessage(info.messageID);
 }, 90000);
 
 } catch (error) {
 return api.sendMessage(`❌ ত্রুটি: ${error.message}`, event.threadID, event.messageID);
 }
 });
<<<<<<< HEAD
};
=======
};
>>>>>>> 5f826bfa37596c145c0dee848e9aff6fc51060d8
