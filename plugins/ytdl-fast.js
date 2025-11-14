const { cmd } = require("../command");
const fetch = require("node-fetch");

/*
=========================================
        🎵 YOUTUBE MP3 DOWNLOADER
=========================================
*/

cmd({
  pattern: "play",
  alias: ["mp3", "song"],
  category: "downloader",
  desc: "Download YouTube audio",
  react: "🎵"
}, 

async (conn, msg, args, { from, q, reply }) => {
  try {

    if (!q) return reply("🎧 *Please type a song name or link!*\n\nExample: .play pasoori");

    reply("⏳ *Searching your song...*");

    let api = `https://api.giftedtech.co.ke/api/download/ytmp3?apikey=gifted&url=${encodeURIComponent(q)}&quality=128`;

    let data = await fetch(api);
    let json = await data.json();

    if (!json.status) return reply("❌ Failed to fetch audio.");

    await conn.sendMessage(from, {
      audio: { url: json.result.download_url },
      mimetype: "audio/mpeg"
    }, { quoted: msg });

    await reply("🎵 *Powered By 𝐅𝐚𝐢𝐳𝐚𝐧-𝐀𝐈 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥*");

  } catch (err) {
    console.log(err);
    reply("❌ Error while processing audio.");
  }
});


/*
=========================================
        🎬 YOUTUBE MP4 DOWNLOADER
=========================================
*/

cmd({
  pattern: "video",
  alias: ["ytv", "vid"],
  category: "downloader",
  desc: "Download YouTube video",
  react: "🎬"
},

async (conn, msg, args, { from, q, reply }) => {
  try {

    if (!q) return reply("🎬 *Please type a video name or link!*\n\nExample: .video pasoori");

    reply("⏳ *Fetching video...*");

    let api = `https://api.giftedtech.co.ke/api/download/ytmp4?apikey=gifted&url=${encodeURIComponent(q)}&quality=720`;

    let data = await fetch(api);
    let json = await data.json();

    if (!json.status) return reply("❌ Failed to fetch video.");

    await conn.sendMessage(from, {
      video: { url: json.result.download_url },
      caption: "🎥 *Powered By 𝐅𝐚𝐢𝐳𝐚𝐧-𝐀𝐈 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥*"
    }, { quoted: msg });

  } catch (err) {
    console.log(err);
    reply("❌ Error while processing video.");
  }
});
