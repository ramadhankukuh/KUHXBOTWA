let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'pembayaran')).buffer(), `
┌〔 TOPUP • FREE FIRE 〕
├ Nominal : 140 Diamond
├ Harga : Rp19.000,00
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
handler.topupff = ['payff140']
handler.command = /^(payff140|orderff140|\?)$/i

module.exports = handler