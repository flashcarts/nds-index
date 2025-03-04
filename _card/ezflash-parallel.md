---
title: EZ-Flash Parallel
creator: ezflash.cn
description:
categories:
- ezflash
- wood
sdhc: true
dsi: true
3ds: true
downloads:
  EZ-Flash Parallel Kernel 1.06:
    url: https://www.ezflash.cn/zip/ezpkernelen20240425.zip
  EZ-Flash Parallel Kernel 1.05:
    url: https://www.ezflash.cn/zip/ezpkernelen20240417.zip
images:
- url: /assets/images/cards/ezflash-parallel/front.png
- url: /assets/images/cards/ezflash-parallel/front_pcb.jpg
website: https://www.ezflash.com/
---

This flashcart was released by the EZ-Flash team, it's an original design flashcart and runs a kernel based on Wood RPG. The flashcart is powered by a Gowin GW1N-LV9 FPGA (advertised by EZ-Flash as an original chinese designed FPGA). This flashcart suffers from MicroSD performance problems and bugs such as a non-functional sleep mode which appear to be in hardware and not fixable in software.

Two kernels are provided for download, 1.05 and 1.06. In 1.05 and below, a bug with missing save patches in the game `Casper's Scare School: Spooky Sports Day` causes the flashcart to become **bricked** if this game is run. This issue is fixed in 1.06, but 1.06 also write-protects the flashcart's on-board flash memory, which makes it impossible to install some recovery tools and EZ-Flash boot mods without hardware modifications.

If you wish to mod your EZ-Flash Parallel, it is advised to use 1.05, otherwise use 1.06.

Do note that the `Aging Card NTR` software will still cause a **brick** on this flashcart regardless of the kernel being used so it is **strongly advised** to avoid running it on the EZ-Flash Parallel.


### Setup Instructions (EZ-Flash Parallel Kernel 1.05/1.06)
1. [Format the SD card you are using to FAT32](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
1. Download the EZ-Flash Parallel Kernel 1.05/1.06
1. Extract the EZ-Flash Parallel Kernel 1.05/1.06 .zip file to your SD card root.
1. Place any `.nds` game ROMs you'd like to play into a folder of your choice which isn't the `__rpg`_folder.
    - (Optional) You may want to create a `Games` folder to store your ROMs in to keep the root of your SD card organised.