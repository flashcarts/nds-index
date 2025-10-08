---
title: R4i Gold 3DS / R4i Gold Plus
creator: r4ids.cn
description:
categories:
- bl2ck
- wood
sdhc: true
dsi: true
3ds: true
downloads:
  Wood R4 1.64:
    url: https://archive.flashcarts.net/r4ids.cn/r4ids.cn_Wood_R4_1.64.zip
  BL2CK 1.31.0:
    url: https://archive.flashcarts.net/BL2CK/BL2CK_1.31.0.zip
images:
- url: /assets/images/cards/r4ids-3ds-plus/front.jpg
- url: /assets/images/cards/r4ids-3ds-plus/back.jpg
- url: /assets/images/cards/r4ids-3ds-plus/front_plus.jpg
- url: /assets/images/cards/r4ids-3ds-plus/back_plus.jpg
- url: /assets/images/cards/r4ids-3ds-plus/pcb_front.jpg
- url: /assets/images/cards/r4ids-3ds-plus/pcb_back.jpg
- url: /assets/images/cards/r4ids-3ds-plus/box_front.jpg
- url: /assets/images/cards/r4ids-3ds-plus/box_back.jpg
cheats:
- kernel: "Wood R4 1.64: SD:/__rpg/cheats/usrcheat.dat"
- kernel: "BL2CK 1.31.0: SD:/__rpg/cheats/usrcheat.dat"
website: http://r4ids.cn/
---

The R4i Gold 3DS is an Acekard clone and one of the few non-Original R4 carts to get an official port of Wood R4. Wood R4 1.64 differs from the original R4 version by having extra features such as real time save (RTS).

The R4i Gold Plus is based on the older 3DS version and runs the same Wood R4 kernel but has a switch on the PCB that allows switching between DS mode and a built in ntrboot mode, much like the Ace3DS X, although the switch on the R4i Gold Plus requires disassembling the cart to access.

The last batch of the R4i Gold Plus carts had a hardware fault that rendered them unable to load games with Wood R4 1.64. If you have one of these carts the alternative is to use BL2CK OS, although you won't get the additional features from Wood R4 1.64.

### Setup Instructions (Wood R4 1.64)
1. [Format the SD card you are using to FAT32](https://dsi.cfw.guide/sd-card-setup.html)
1. Download the Wood R4 1.64 Kernel
1. Extract the Wood R4 1.64 Kernel .zip file to your SD card root.
1. Place any `.nds` game ROMs you'd like to play into a folder of your choice which isn't the `__rpg`_folder.
    - (Optional) You may want to create a `Games` folder to store your ROMs in to keep the root of your SD card organised.

{% include kernels/bl2ck.md %}