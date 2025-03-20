---
title: R4 SDHC Renovation V2.10T/V2.20T
creator: r4sdhc.com
description:
categories:
- dstt
- timebomb
- ysmenu
sdhc: true
dsi: up to?
3ds: up to?
downloads:
  RetroGameFan YSMenu Fork 7.06:
    url: https://gbatemp.net/download/35737/download
  R4SDHC V2.10T & V2.20T 1.5 Kernel:
    url: https://archive.flashcarts.net/r4sdhc.com/old/r4sdhc.com_R4i_SDHC_V2.10T_V2.20T_Kernel_2.10T15.zip
images:
- url: /assets/images/cards/r4sdhc-com/renovation/front1.jpg
- url: /assets/images/cards/r4sdhc-com/renovation/back.jpg
- url: /assets/images/cards/r4sdhc-com/renovation/front2.jpg
- url: /assets/images/cards/r4sdhc-com/renovation/front3.jpg
website: https://web.archive.org/web/20110130181931/http://www.r4sdhc.com/
---

These are DEMON DSTTi-based clones. These differ from other DEMON clones by loading part of the firmware from a `_DS_MENU.DAT` file, after which acts like a standard DEMON clone that looks for R4.DAT and shows `MENU?` if it is missing. If `_DS_MENU.DAT` is missing, the cart will simply boot to a white screen.

### Setup Instructions (YSMenu)

1. [Format the SD card you are using to FAT32](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
1. Download RetroGameFan YSMenu Fork 7.06
1. Extract the YSMenu .7z you downloaded using 7-zip or similar, then go into the `DSTTi-Clone YSMenu` folder.
1. From this folder, copy the following files/folders to your SD card root.
    - `Games` folder
    - `TTMenu` folder
    - `TTMenu.dat`
1. Download [DEMON YSMenu flashcard-bootstrap](https://flashcard-archive.ds-homebrew.com/YSMenu/DEMON_common/R4.dat).
1. Download [R4 V2.10T/V2.20T boot file](https://github.com/flashcarts/flashcard-archive/raw/refs/heads/main/archive/r4sdhc.com/old/r4sdhc.com_R4i_SDHC_V2.10T_V2.20T_Kernel_2.10T15/_DS_MENU.DAT).
1. Copy `R4.dat` to the root of your SD card.
1. Copy `_DS_MENU.DAT` to the root of your SD card.
1. Place any `.nds` game ROMs you'd like to play into the `Games` folder.
