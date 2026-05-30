<div align="center">

# f1qxzz V2

**WhatsApp Multi-Device Bot**

[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![Baileys](https://img.shields.io/badge/Baileys-v6-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://github.com/WhiskeySockets/Baileys)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](#)

<br>

**170+ commands — downloader, games, AI, sticker, group management, economy system.**

</div>

---

## Fitur

<table>
<tr>
<td width="50%">

#### Tools & Media
- TikTok / YouTube / Instagram downloader
- Sticker maker + EXIF custom
- Audio/video converter (ffmpeg)
- Text-to-image, quote card
- Background removal, image upscale

</td>
<td width="50%">

#### Group & Game
- Anti-link, anti-toxic, anti-delete
- Welcome / leave notification
- Tic-Tac-Toe, Chess, Blackjack
- Tebak Kata, Quiz, Family 100
- Economy system (saldo, daily claim)

</td>
</tr>
</table>

---

## Quick Start

### Termux

```bash
pkg upgrade && pkg update
pkg install git nodejs ffmpeg imagemagick -y
git clone https://github.com/f1qxzz/V2.git
cd V2
npm install
npm start
```

### VPS / Laptop

```bash
git clone https://github.com/f1qxzz/V2.git
cd V2
npm install
# Edit settings.js (owner, API keys, dll)
npm start
```

### Pairing Code

```bash
npm run code
```

---

## Konfigurasi

Edit `settings.js`:

```js
global.numberowner = '628xxx'    // Nomor owner
global.namabot = 'f1qxzz V2'    // Nama bot
global.lol = ''                  // API key lolhuman.xyz
global.xzn = ''                  // API key xzn.wtf
global.autoread = false          // Auto-read chat
global.autoblok212 = true        // Auto-block +212
```

---

## Struktur Project

```
V2/
├── index.js              # Entry point: koneksi WhatsApp
├── Arifzyn.js            # Command handler (3800+ baris)
├── settings.js           # Konfigurasi bot
├── lib/                  # Utility: converter, exif, game, scraper
├── media/                # Asset: thumbnail, sticker
├── src/                  # Data: user, owner, premium, media
└── speed.py              # Speed test utility
```

---

## Deploy

| Platform | Status |
|----------|--------|
| Termux | Supported |
| VPS | Supported |
| Panel (Pterodactyl) | Supported |
| Heroku | Supported |
| Replit | Supported |

---

## License

MIT
