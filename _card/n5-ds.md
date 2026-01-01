---
title: N5 DS
creator: dsn5.com
sdhc: true
dsi: false
3ds: false
downloads:
  RetroGameFan YSMenu Fork 7.06:
    url: https://gbatemp.net/download/35737/download
  N5 DS 1.32 Kernel:
    url: https://archive.flashcarts.net/dsn5.com/dsn5.com_N5_Kernel_1.32.zip
images:
- url: /assets/images/cards/n5-ds/front.jpg
- url: /assets/images/cards/n5-ds/back.jpg
website: https://web.archive.org/web/20120603014114/http://www.dsn5.com/
---

This flashcart is a clone of the OG R4SDHC and thus has the same 4GB SDHC card limitation. This cart requires it's `_AX_MENU.DAT` file to boot up regardless of the kernel used.

### Setup Instructions (YSMenu)

1. [Format the SD card you are using to FAT32](https://dsi.cfw.guide/sd-card-setup.html)
1. Download RetroGameFan YSMenu Fork 7.06
1. Extract the YSMenu .7z you downloaded using 7-zip or similar, then go into the `R4-Clone YSMenu` folder.
1. From this folder, copy the following files/folders to your SD card root.
    - `Games` folder
    - `TTMenu` folder
    - `YSMenu.nds`
    - `TTMenu.dat`
1. Rename `YSMenu.nds` to `_DS_MENU.DAT`.
1. Download the [N5 Boot file](https://github.com/flashcarts/flashcard-archive/raw/refs/heads/main/archive/dsn5.com/dsn5.com_N5_Kernel_1.32/_AX_MENU.DAT).
1. Copy `_AX_MENU.DAT` to your SD card root.
1. Place any `.nds` game ROMs you'd like to play into the `Games` folder.
