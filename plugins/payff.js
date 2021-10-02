let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'topupff')).buffer(), `
┌〔 TOPUP • FREE FIRE 〕
├ untuk info pembayaran & pemesanan.
├ bisa klik wa.me/12816245470
└────
`.trim(), '© kuhxbot', 'MENU AWAL', '.menu', m)
handler.topupff = ['payff']
handler.command = /^(payff|orderff|\?)$/i

module.exports = handler
