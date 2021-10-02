let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'topupml')).buffer(), `
┌〔 TOPUP • MOBILE LEGENDS 〕
├ untuk info pembayaran & pemesanan.
├ bisa klik wa.me/12816245470
└────
`.trim(), '© kuhxbot', 'MENU AWAL', '.menu', m)
handler.topupff = ['payml']
handler.command = /^(payml|orderml|\?)$/i

module.exports = handler
