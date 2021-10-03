let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'INGFO')).buffer(), `
┌〔 WA OWNER 〕
├ https://wa.me/12816245470
└────

┌〔 IG 〕
├ https://instagram.com/ramadhankukuh
└────

┌〔 YT 〕
├ https://youtube.com/c/KukuhRamadhann
└────

┌〔 GITHUB 〕
├ https://github.com/ramadhankukuh
└────

┌〔 THANKS TO 〕
├ Allah SWT
├ Ariff
├ Nurutomo
└────
`.trim(), '© kuhxbot', 'MENU AWAL', '.menu', m)
handler.help = ['ingfo']
handler.command = /^(info|ingfo|\?)$/i

module.exports = handler