let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
┌〔 Donasi • Emoney 〕
├ https://saweria.co/ramadhankukuh
├ https://trakteer.id/kukuhramadhan/tip
└────
`.trim(), '© stikerin', 'MENU AWAL', '.menu', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
