// ytdl-fast.js
const { cmd } = require("../command");
const axios = require("axios");
const yts = require("yt-search");
const MAX_WA_FILE_SIZE = 16 * 1024 * 1024; // 16 MB WhatsApp limit

// helper: get arraybuffer buffer from url
async function getBuffer(url) {
  const res = await axios.get(url, {
    responseType: "arraybuffer",
    timeout: 120000,
    headers: {
      // some hosts require user-agent
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
    }
  });
  return Buffer.from(res.data);
}

// helper: try to get content-length (bytes) via HEAD
async function getContentLength(url) {
  try {
    const head = await axios.head(url, {
      timeout: 15000,
      headers: { "User-Agent": "axios/1.0" },
      maxRedirects: 5
    });
    const len = head.headers["content-length"];
    return len ? parseInt(len, 10) : null;
  } catch (e) {
    return null;
  }
}

/* ============================
   PLAY — YouTube -> MP3
   ============================ */
cmd({
  pattern: "play",
  alias: ["song", "mp3"],
  desc: "Download YouTube audio (mp3)",
  category: "downloader",
  react: "🎧",
  filename: __filename
}, async (conn, msg, match, { from, q, reply }) => {
  try {
    // `q` may be undefined; try to read from match if your loader passes it differently
    const query = (q || (typeof match === "string" ? match : "") || "").trim();
    if (!query) return reply("🎧 Please provide a YouTube link or search query.\n\nExample: `.play Pasoori`");

    await reply("⏳ Searching / preparing audio...");

    // resolve link: if plain text, search on yt
    let url = query;
    if (!query.includes("youtube.com") && !query.includes("youtu.be")) {
      const s = await yts(query);
      if (!s || !s.videos || s.videos.length === 0) return reply("❌ No results found.");
      url = s.videos[0].url;
    }

    // call GiftedTech ytmp3 endpoint (you gave this earlier)
    const api = `https://api.giftedtech.co.ke/api/download/ytmp3?apikey=gifted&url=${encodeURIComponent(url)}&quality=128`;
    const apiRes = await axios.get(api, { timeout: 120000 });
    const json = apiRes.data;

    if (!json || !json.status) {
      console.log("Gifted ytmp3 response:", json);
      return reply("❌ Failed to fetch audio from API.");
    }

    // try to obtain direct download URL field name variations
    const audioURL = json.result?.download_url || json.result?.url || json.result?.audio || json.result?.audio_url;
    if (!audioURL) {
      console.log("Unexpected API audio result:", json);
      return reply("❌ API returned unexpected audio data.");
    }

    // check size first
    const length = await getContentLength(audioURL);
    if (length && length > MAX_WA_FILE_SIZE) {
      // file too big → send URL instead (user can open externally)
      await conn.sendMessage(from, {
        text: `⚠️ Audio file is too large to send via WhatsApp (${(length / (1024*1024)).toFixed(2)} MB).\nYou can download it here:\n${audioURL}`
      }, { quoted: msg });
      return;
    }

    // fetch buffer and send
    const buffer = await getBuffer(audioURL);

    await conn.sendMessage(from, {
      audio: buffer,
      mimetype: "audio/mpeg",
      ptt: false,
      fileName: `Faizan-AI_${Date.now()}.mp3`
    }, { quoted: msg });

    // optional: caption message
    await conn.sendMessage(from, { text: "🎧 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐅𝐚𝐢𝐳𝐚𝐧-𝐀𝐈 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥" }, { quoted: msg });

  } catch (err) {
    console.error("play command error:", err && err.message ? err.message : err);
    try { reply("❌ Error while processing audio."); } catch (e) {}
  }
});

/* ============================
   VIDEO — YouTube -> MP4
   ============================ */
cmd({
  pattern: "video",
  alias: ["ytv", "vid"],
  desc: "Download YouTube video (mp4)",
  category: "downloader",
  react: "🎬",
  filename: __filename
}, async (conn, msg, match, { from, q, reply }) => {
  try {
    const query = (q || (typeof match === "string" ? match : "") || "").trim();
    if (!query) return reply("🎬 Please provide a YouTube link or search query.\n\nExample: `.video Pasoori`");

    await reply("⏳ Searching / preparing video...");

    // resolve link
    let url = query;
    if (!query.includes("youtube.com") && !query.includes("youtu.be")) {
      const s = await yts(query);
      if (!s || !s.videos || s.videos.length === 0) return reply("❌ No results found.");
      url = s.videos[0].url;
    }

    // call GiftedTech ytmp4 endpoint (you gave this earlier)
    const api = `https://api.giftedtech.co.ke/api/download/ytmp4?apikey=gifted&url=${encodeURIComponent(url)}&quality=720`;
    const apiRes = await axios.get(api, { timeout: 120000 });
    const json = apiRes.data;

    if (!json || !json.status) {
      console.log("Gifted ytmp4 response:", json);
      return reply("❌ Failed to fetch video from API.");
    }

    const videoURL = json.result?.download_url || json.result?.url || json.result?.video_url || json.result?.video_url_hd || json.result?.video;
    if (!videoURL) {
      console.log("Unexpected API video result:", json);
      return reply("❌ API returned unexpected video data.");
    }

    // check content-length first
    const length = await getContentLength(videoURL);
    if (length && length > MAX_WA_FILE_SIZE) {
      // if too big, send direct URL (or send as document if you prefer)
      await conn.sendMessage(from, {
        text: `⚠️ Video is too large to send via WhatsApp (${(length / (1024*1024)).toFixed(2)} MB).\nDownload here:\n${videoURL}`
      }, { quoted: msg });
      return;
    }

    // fetch buffer and send
    const buffer = await getBuffer(videoURL);

    await conn.sendMessage(from, {
      video: buffer,
      mimetype: "video/mp4",
      caption: "🎥 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 𝐅𝐚𝐢𝐳𝐚𝐧-𝐀𝐈 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥"
    }, { quoted: msg });

  } catch (err) {
    console.error("video command error:", err && err.message ? err.message : err);
    try { reply("❌ Error while processing video."); } catch (e) {}
  }
});
