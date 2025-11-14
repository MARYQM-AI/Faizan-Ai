const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "FAIZAN-AI~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUVjYmJRYW1ta1ZBZkg5QTB2b0RuNFZVQkd6VHhxWllzaUhwQVl5OGUxQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVhERXpmRGVLemMzbmNrRm9xR0d2OGRsb1dpUGxNNTlSVmpRZFdLbmtrYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVSFMvK1JQUmwrYW9OcEYyOWR6ajUzMm0xNlAxMWdrY21yZmpRU1pLdjJFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtbW93Nlk3V1YreW5hay9iMUNUR0x6T3dHQWJRY2krQlZXSnVOekpLdHlZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNDRkVoWDNHU2FTZzJNMHJnMEtJRVFZSnJqZm00VVpvWW9lRy9zOUNSbGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZMeHg5TDUzQ251emNXMGJIZlpTaEl3Z3FIckw3dXJlSG42VnFNS25FVzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0RyNkU2V1dCOG5iSjFZcU1iZGhJTkRNWTBhNkN1NjJhQnphWTcrK0tXMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWURsdjRUSjN6UWpQbEpJVExQeVB1ZmhUNmxQc0FnRmkzOHBXeVpTeXlYQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNzMW9TMW5rMnJ3RGk2M3F6ZGZFRnpETjkxS2Q3djJDNktHOWNTV3pBN2xYdWlGVFp3Zk9IV3BGV09vRnp6L2YwUmtGUFZDRXMrWWUyKzYrWUFBOER3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM1LCJhZHZTZWNyZXRLZXkiOiJDcWFURExCSFZXQ2hYdEVGeDJKN25QNTcvSVVWTVNGVWRwUjlURG5iYSswPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQwODU3NjY3NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzk2QzUyQjZEMEJFNjE4MEVCM0JDQTlDNDQ0QjgyNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYzMTM4MzIxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI3eXJ3X1lOalN6bWk0eWNNZFd3aVJBIiwicGhvbmVJZCI6IjAzNTUxNTE5LTM3OTEtNDZiMS04ZWFhLTBkODJjMzljNGFiYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvN0ZodlRUd2pMc3ZpaGNpbHFOYWxCTU1kelE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiejNVL3lveWhhMkgwVVZhZU0xOG5XOVJMd05BPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBQTksyWTZUIiwibWUiOnsiaWQiOiI5MjM0MDg1NzY2NzQ6MTZAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMjU0OTEwMDg4MTk0MDc6MTZAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOaVArNndDRVA2MTNjZ0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJyZzk1ZXVndUVYQlAya3JpSys5U3BmSXRqT1Naam0xU080VnZEL3YwL2tZPSIsImFjY291bnRTaWduYXR1cmUiOiJvc2V5TkdQYkVSZ2tLTnVYcXR2VW5pMFVqR0xXVmJnYlpKVERzeHJ1ZG8zbENSR0NnQWdzSE9BeldUdGFRY043aVdEYjBLZWhwN2lwcEJlMG5qWTlCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidkZvdGppYXRvWndQMzJIcVBvYXZ0RWpqWUZvbURCak9kL1Q2dVlXWHZ4R1VDMXpsYWl4Vzl0S0ZwMHdOZkJCbmRDVnJmN1dMNENPV0FkWHkwM2ZVRFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0MDg1NzY2NzQ6MTZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYTRQZVhyb0xoRndUOXBLNGl2dlVxWHlMWXprbVk1dFVqdUZidy83OVA1RyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBZ04ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYzMTM4MzE2LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9EbyJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY FAIZAN-AI 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.ibb.co/9mdHyGDL/shaban-md.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "*𝐹𝒶𝒾𝓏𝒶𝓃-𝒜𝒾*",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "*𝐹𝒶𝒾𝓏𝒶𝓃-𝒜𝒾*",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923266105873",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*FAIZAN-AI*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ✨ ᴾᵒʷᵉʳᵉᵈ ᵇʸ *𝐹𝒶𝒾𝓏𝒶𝓃-𝒜𝒾* ✨💫",
// add bot owner name    
ALIVE_VID: process.env.ALIVE_VID || "https://i.ibb.co/9mdHyGDL/shaban-md.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923266105873",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
