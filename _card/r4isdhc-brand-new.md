---
title: R4i SDHC Brand New V2.0
creator: r4isdhc.com
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
  R4i SDHC Brand New V2.0 1.4 Kernel:
    url: https://archive.flashcarts.net/r4isdhc.com/old/r4isdhc.com_Upgrade_V1.4_Kernel_2.0.zip
images:
- url: /assets/images/cards/r4isdhc-com/brand-new/front.jpg
website: https://web.archive.org/web/20110308022743/http://www.r4isdhc.com/
---

These are DEMON DSTTi-based clones. These differ from other DEMON clones by loading part of the firmware from a `_DS_MENU.DAT` file, after which acts like a standard DEMON clone that looks for R4.DAT and shows `MENU?` if it is missing. If `_DS_MENU.DAT` is missing, the cart will simply boot to a white screen.

### Setup Instructions (YSMenu)

1. [Format the SD card you are using to FAT32](https://dsi.cfw.guide/sd-card-setup.html)
1. Download RetroGameFan YSMenu Fork 7.06
1. Extract the YSMenu .7z you downloaded using 7-zip or similar, then go into the `DSTTi-Clone YSMenu` folder.
1. From this folder, copy the following files/folders to your SD card root.
    - `Games` folder
    - `TTMenu` folder
    - `TTMenu.dat`
1. Download [DEMON YSMenu flashcard-bootstrap](https://archive.flashcarts.net/YSMenu/DEMON_common/R4.dat).
1. Download [R4i SDHC Brand New V2.0 boot file](https://github.com/flashcarts/flashcard-archive/raw/refs/heads/main/archive/r4isdhc.com/old/r4isdhc.com_Upgrade_V1.4_Kernel_2.0/_DS_MENU.DAT).
1. Copy `R4.dat` to the root of your SD card.
1. Copy `_DS_MENU.DAT` to the root of your SD card.
1. Place any `.nds` game ROMs you'd like to play into the `Games` folder.
