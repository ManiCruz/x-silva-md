/**
//════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                            //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                          //
//════════════════════════════════════════════════════════════════════════════════════════════//
*                                                                 
  * @project_name : Silva-Md
   * @author : Silva Tech Info
   * @youtube : https://www.youtube.com/@Silvaedits
   * @description : Silva-Md ,A Multi-functional whatsapp user bot.
   * @version 2.5.0
*
* 
   * Created By Silva Tech Info.
   * © 2024 SILVA-Md.


*/













const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "https://telegra.ph/file/204481823350f368c1826.mp4" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="sylivanusmomanyi@gmail.com"
global.location="kilgoris,Kenya."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority"

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || ""


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/Sylivanu/x-silva-md";
global.gurl  =process.env.GURL  || "https://www.whatsapp.com/channel/0029VaAkETLLY6d8qhLmZt2v";
global.website=process.env.GURL || "https://www.whatsapp.com/channel/0029VaAkETLLY6d8qhLmZt2v" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/bf328b6925882b2644535.jpg"



global.devs = "254700143167" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254700143167";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349018044861";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254700143167";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "254xxxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254700143167";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://session.giftedtechnexus.co.ke";


global.SESSION_ID = process.env.SESSION_ID ||  "Gifted;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU96OGlUZmp6NHZHRjdJSTBzdVRMM0ladkRLNldwcjNXeXJ3akZZdHpWVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieEVpUGpYZU1zdngxbitNZlZyaTR4L0t4bXpwVkxZTjJhWjB0cjMvM0lBND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIySUdMYW96Y0d3d1kvVWx6aERXZ21QdEh0dFNJdHMyQ3VEZ2JEZmFwLzB3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrS2ZhQjV1WVlkdENmRFVZYnliMGlJNjlxUWVVWHBiYXRwcVFRQ1h6N200PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllQdnJ4N2EzTE5WOUxkYTlwV1p5WkJRUk5XUHI0T0NKTW1ySThZeFFqVjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Img0VUJiZkNMMFQ2dXg0bWhEblBZcjhLM1l0b1JrZWNXbGNUSmtiaStSa1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU5FWVM1ZWpLT0VYbVptdWZJdEh1d09HZzRzcW94Z294Nlc0OUlIRjFIZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMzAxVUxlTWxoQkNlVUwrOHFWdnNQcHFuZE8rcjVpRzVvRERBQ0FMNXhuaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFFSjZ4Z3BodXVNWi9JWVBJb2RwQ0VkeWp0VTlWWTNnRTZaQ3gxRzBrQW5jQ0xMcXNyV0ttNmJzSi8yQWl6UHdac1JPSklQaStJUFlWcjNLMWVKZ2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQsImFkdlNlY3JldEtleSI6InpOdDVmR0NSTVpLUmNNV2dJa1dZNVdlUmJmYVJCWHk4dFpFOURlcXoxU1E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkVsYkViRlZOVGtXOHZTZWFUWTFGTXciLCJwaG9uZUlkIjoiNmY1NzA4YmYtZDM2YS00ZTUzLWI4MTItMDYyZDgyZDIzNDVhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitUZnFidHdkdzhLVFdFRTlzZ3o0OGcydkp0cz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJeWxadkt0YVNlNldibnZzUVdYN2RLQlZmUFE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNldHVlNTTUoiLCJtZSI6eyJpZCI6IjIzNDkwMTgwNDQ4NjE6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJLw6/DsWcgw4dyw7x6In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOLzl0SnNFRU5lVWc3TUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJDcW0yMGFrcFpwdWpoVTh5VFdyVWlNMmxNQk91ZGJlME5hWDFBaDNLUHpZPSIsImFjY291bnRTaWduYXR1cmUiOiJUd0w5RTNuTGpxN0psU2llMlAzL0gvT3ZzVUN6eSthQTMwQjc0RXlmbGZTK3BrdTlDRXBqUmtxUlFZTTg0dmtjNkJObTVzUFQrSmY5ZVZHcTZOdUpBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiR05NMEMwcHg4TFliaS9GNkFFZlB4NDNna0lwUFJ6ZVUxN1lWeWs5Rm1hdVRGSU5OZlphZkc4bmJSUzlSWG5UK0wrWWpUeE5GaTcyaW15aEFWOVN4aXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDE4MDQ0ODYxOjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUXFwdHRHcEtXYWJvNFZQTWsxcTFJak5wVEFUcm5XM3REV2w5UUlkeWo4MiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNzYxOTI5OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMclAifQ==" ; // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Gifted-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.2.5.0",
  caption : process.env.CAPTION || "*©x-silva-md*" , // ```『 ©x-silva-md 』```", //*『©x-silva-md』*\n youtube.com/@silvaedits"),
 
  author : process.env.PACK_AUTHER|| "SilvaTech",
  packname: process.env.PACK_NAME || "WhatsappBots♥️",
  botname : process.env.BOT_NAME  || "silva-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "king 👑 Cruz",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "silva",



};

























global.rank = "updated"
global.isMongodb = false ; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.0.0 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "true",
  //warncount: process.env.WARN_COUNT || 5,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "true",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
