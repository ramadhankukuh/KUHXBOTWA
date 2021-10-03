let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'pembayaran')).buffer(), `
┌〔 TOPUP • FREE FIRE 〕
├ Nominal : 2.000 Diamond
├ Harga : Rp260.000,00
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
handler.topupff = ['payff2000']
handler.command = /^(payff2000|orderff2000|\?)$/i

module.exports = handler