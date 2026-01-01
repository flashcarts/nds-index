---
title: R4i Gold 3DS EU
creator: R4i-Gold.EU
sdhc: true
dsi: true
3ds: Up to v10.2.0
downloads:
  RetroGameFan YSMenu Fork 7.06:
    url: https://gbatemp.net/download/35737/download
  R4i-SDHC 1.87b Kernel:
    url: https://archive.flashcarts.net/r4i-sdhc.com/r4i-sdhc.com_DEMON_1.87b.zip
images:
- url: /assets/images/cards/r4i-gold-eu/front.jpg
- url: /assets/images/cards/r4i-gold-eu/back.jpg
- url: /assets/images/cards/r4i-gold-eu/boardfront.jpg
- url: /assets/images/cards/r4i-gold-eu/boardback.jpg
website: https://web.archive.org/web/20200310030828/http://www.r4i-gold.eu/
---

This flashcart is a clone of the r4i-sdhc.com DSTTi carts. This cart was allegedly manufactured by r4isdhc.com themselves, with this flashcart being intended for a different market. With a modified R4.dat it can be made to run the official R4iMenu v1.87b kernel.

{% include kernels/ysmenu-dstt.md timebomb="true" %}

### Setup Instructions (R4i-SDHC 1.87b Kernel with patched boot file)
1. [Format the SD card you are using to FAT32](https://dsi.cfw.guide/sd-card-setup.html)
1. Download the R4i-SDHC 1.87b Kernel
1. Extract the R4i-SDHC 1.87b Kernel .zip file to your SD card root.
1. Download [R4_mod.dat](https://github.com/Asaduji/R4i-Kernel-Patcher/releases/download/1.0.0/R4_mod.dat) and rename it to `R4.dat`, replacing the existing R4.dat file from the kernel download.
1. Create a `Games` folder and place any `.nds` game ROMs you'd like to play into that folder or sub-folder.
