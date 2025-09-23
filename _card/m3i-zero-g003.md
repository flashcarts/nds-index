---
title: M3i Zero (GMP-Z003)
creator: M3 Adapter
description:
categories:
- m3
- sakura
sdhc: true
dsi: Latest firmware
3ds: Up to ?
downloads:
  M3DS Sakura 1.49a:
    url: https://archive.flashcarts.net/m3adapter.com/m3adapter.com_GMP-Z003_Sakura_1.49a.zip
images:
- url: /assets/images/cards/m3i-zero-g003/front.jpg
website: https://web.archive.org/web/20140106055622/http://m3adapter.com/
---

The M3i Zero (GMP-Z003 version) is the last Slot-1 flashcart from the M3 Adapter team. As the M3 team stopped updating Sakura around 2011, the Sakura kernel is unable to play quite a few games that were released later on in the DS lifespan. Unfortunately, the M3 team made booting alternate kernels extremely difficult on the GMP-Z003. This means that, unlike the non GMP-Z003, YSMenu will not work on this cart. 

However, TwiLight Menu ++ does support this cart and so it is recommended to use it over Sakura/Touchpod. This page will cover installing M3 Sakura on the GMP-Z003, you can find a guide for installing TwiLight Menu ++ here instead: <https://wiki.ds-homebrew.com/twilightmenu/installing-flashcard>

While this cart does supports SDHC cards, Sakura/TouchPod has issues with cards that are 64GB or larger. The nds loader will simply refuse to load games, or load the game but crash/freeze soon after.

### Setup Instructions (M3 Sakura)
1. [Format the SD card you are using to FAT32](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
1. Download M3DS Sakura 1.49a
1. Extract the M3DS Sakura 1.49a .zip file to your SD card root.
1. Place any `.nds` game ROMs you'd like to play into a folder of your choice which isn't the `SYSTEM` folder.
    - (Optional) You may want to create a `Games` folder to store your ROMs in to keep the root of your SD card organised.