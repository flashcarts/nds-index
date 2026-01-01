---
title: Acekard 2i
creator: Acekard
sdhc: true
dsi: Up to 1.4.4
3ds: Up to 4.3.0
downloads:
  AKAIO 1.9.0:
    url: https://archive.flashcarts.net/acekard.com/AceKard_2i/AKAIO_1.9.0-20121129.zip
  BL2CK 1.31.0:
    url: https://archive.flashcarts.net/BL2CK/BL2CK_1.31.0.zip
  Acekard 2i FWUpdate:
    url: https://archive.flashcarts.net/acekard.com/AceKard_2i/Acekard_2i_FWUpdate/
images:
- url: /assets/images/cards/acekard2i/front.jpeg
- url: /assets/images/cards/acekard2i/back.jpeg
- url: /assets/images/cards/acekard2i/pcb-back.jpeg
- url: /assets/images/cards/acekard2i/pcb-front.jpeg
- url: https://archive.flashcarts.net/acekard.com/AceKard_2i/acekard2i.jpg
  description: Alternate label design
website: https://web.archive.org/web/20140205183900/http://www.acekard.com/
---

The original Acekard2i uses AKAIO 1.9.0. If your cart fails the clone check, it can instead use the BL2CK kernel. AKAIO has very good game and homebrew compatibilty, so this is one of the more reliable carts out there.

Note that while firmware updates allow the Acekard 2i to run on newer DSi firmwares like 1.4.4, they cause significant slow down in boot times, and you lose the AK2 logo on your home screen. If you use an NDS, DS Lite, hacked DSi, or hacked 3DS, it is recommended to downgrade to the oldest firmware available for faster boot times.

This flashcart is unique in that it can be flashed with [ntrboot](https://3ds.hacks.guide/ntrboot) while still being usable for DS games at the same time! Installing ntrboot will also have the same effect as a firmware downgrade since it overwrites the fake game section of the firmware.

{% include kernels/akaio.md akaio="1.9.0" %}
