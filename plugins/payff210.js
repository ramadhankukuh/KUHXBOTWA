let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'pembayaran')).buffer(), `
┌〔 TOPUP • FREE FIRE 〕
├ Nominal : 210 Diamond
├ Harga : Rp28.500,00
├ Order Klik : wa.me/12816245470
└────

┌〔 PEMBAYARAN 〕
├ Bank BRI
├ DANA 
├ GoPay
├ OVO
├ LinkAja
├ ShopeePay
├ QRIS
├ Alfamart 
├ Alfamidi
├ Indomaret
└────
`.trim(), '© kuhxbot', 'MENU AWAL', '.menu', m)
handler.topupff = ['payff210']
handler.command = /^(payff210|orderff210|\?)$/i

module.exports = handler