let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'pembayaran')).buffer(), `
┌〔 TOPUP • FREE FIRE 〕
├ Nominal : 1.440 Diamond
├ Harga : Rp190.000,00
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
handler.topupff = ['payff1440']
handler.command = /^(payff1440|orderff1440|\?)$/i

module.exports = handler