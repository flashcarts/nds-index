---
title: r4i-sdhc.com carts
creator: r4i-sdhc.com
description:
categories:
- dstt
- timebomb
- ysmenu
sdhc: true
dsi: Depends
3ds: Depends
downloads:
  RetroGameFan YSMenu Fork 7.06:
    url: https://gbatemp.net/download/35737/download
  R4i-SDHC 1.87b Kernel:
    url: https://archive.flashcarts.net/r4i-sdhc.com/r4i-sdhc.com_DEMON_1.87b.zip
images:
- url: /assets/images/cards/r4i-sdhc-com/wififront.jpg
- url: /assets/images/cards/r4i-sdhc-com/wifiback.jpg
- url: /assets/images/cards/r4i-sdhc-com/wifiboardfront.jpg
- url: /assets/images/cards/r4i-sdhc-com/wifiboardback.jpg
- url: /assets/images/cards/r4i-sdhc-com/front-upgrade.jpg
- url: /assets/images/cards/r4i-sdhc-com/back-upgrade.jpg
- url: /assets/images/cards/r4i-sdhc-com/pcb-front-upgrade.jpg
- url: /assets/images/cards/r4i-sdhc-com/pcb-back-upgrade.jpg
- url: /assets/images/cards/r4i-sdhc-com/front-rts.png
- url: /assets/images/cards/r4i-sdhc-com/front-b9s.png
website: http://r4i-sdhc.com
---

This family of flashcarts are DSTTi-based clones. These are commonly known as "Timebomb" carts because their stock kernel used to stop booting after a certain date. This timebomb was removed in The 1.87b kernel by the manufacturer.

This cart like many other DSTTi-based clones is also capable of running YSMenu. YSMenu is recommended since the stock kernel has issues with cheats, and doesn't have proper folder support for file management, however it is still useful for running ROM hacks and translation patched ROMs which YSMenu is generally not capable of and features a Real-Time-Save (RTS) feature on some supported models.

There are a number of flashcarts by r4i-sdhc.com, not every one of them is compatible with the latest DSi/3DS firmware. The R4i 3DS B9S is pre-flashed with ntrboot, if you want to use it like a normal DS flashcart, you will have to flash it back to the normal DS firmware. 

There were several flashcarts in this family:
- R4i SDHC Upgrade/Upgrade Game Engine (Non-DSi Compatible)
- R4i SDHC i (DSi Compatible but does not work with R4iMenu 1.87b)
- R4i SDHC Wi-Fi V1.4.1 (DSi v1.4.1 Compatible)
- R4i SDHC 3DS RTS (3DS Compatible)
- R4i SDHC 3DS B9S (The above cart pre-flashed with ntrboot)

{% include kernels/ysmenu-dstt.md timebomb="true" %}

### Setup Instructions (R4i-SDHC 1.87b Kernel)
1. [Format the SD card you are using to FAT32](https://dsi.cfw.guide/sd-card-setup.html)
1. Download the R4i-SDHC 1.87b Kernel
1. Extract the R4i-SDHC 1.87b Kernel .zip file to your SD card root.
1. Create a `Games` folder and place any `.nds` game ROMs you'd like to play into that folder or sub-folder.