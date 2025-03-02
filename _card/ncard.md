---
title: N-Card
creator: dsgba.com
description:
categories:
- nand
sdhc: false
dsi: false
3ds: false
downloads:
  N-Card xMenu v2.55 (uDisk v1.45):
    url: https://archive.flashcarts.net/N-Card/N-Card_FW_2.55_v27.zip
  XuluMenu:
    url: https://github.com/ApacheThunder/XuluMenu/releases/latest/download/xulumenu.zip
images:
- url: /assets/images/cards/ncard/front.jpg
- url: /assets/images/cards/ncard/pcb_front.jpg
- url: /assets/images/cards/ncard/pcb_back.jpg
website: http://web.archive.org/web/20070107032710/http://www.dsgba.com/
---

The N-Card is a series of NAND based flashcarts by DSGBA with the games stored on an internal NAND flash module. The contents of the NAND is accessed by the use of a Slot 2 USB adapter or by the use of a direct USB dongle. This cart saves game progress to SRAM and saves back to NAND upon rebooting, for the interim it makes use of a small rechargeable cell to keep the SRAM powered, however due to age, the battery may not hold much of a charge, so it is advise to reboot the console immediately after saving to ensure your progress is saved.

The N-Card also had many clones under different names (DS Linker, DS Fire Link, Ultra FlashPass EX, NeoFlash MK5, Ultra N-Card) which are all compatible with the same uDisk and Xulumenu firmware.

XuluMenu is the advised firmware for N-Card and its clones.

### Setup Instructions (XuluMenu)

Please ensure your N-Card is running uDisk v1.45 before using XuluMenu. To do this, place the uDisk 1.45 files on the root of the N-Card. If the filesystem is pre 1.45 XuluMenu will likely hang. But there is a recovery menu. You access it via L+R shoulder buttons on boot which brings up a recovery screen. From there you boot into built-in uDisk 1.45 while holding start+select to bring up format menu.

#### Flashing instructions

1. Ensure your cart had previously been updated to udisk 1.45 and is formatted to be work with udisk 1.45 and the 1.45 matching DLDI driver.
1. Find and connect a DS/DS Lite with GBA slot2 writer device for your N-card/clone to PC.
1. Boot up DS and boot the cart while holding [L] + [R] + [A] + [B] + [DPad Up] at the same time until you see "USB SAFE BLOCK" text on bottom screen.
1. Run the included UPDATE_ALL.cmd file to have USB exe flash the new SRL to the cart.
1. After the process is complete, reboot and see your changes live! File browser will come up if boot.nds is not present or if cart is booted with B button held.
1. Note that for Xmenu to operate correctly you must run udisk first. You can use udisk 1.45 as your boot.nds if you wish to auto boot into xmenu. The udisk.srl included in the arm9/binaries source can be used for this purpose. Just copy and rename to boot.nds to have XuluMenu autoboot it or as udisk.nds if you wish to use something else as boot.nds

#### Recovery options
Holding B while booting will skip auto booting boot.nds and show file browser. If fat init fails, built in uDisk will run. However if fat init hangs you can boot while holding L + R shoulder buttons to bring up recovery menu that will let you boot into built in udisk 1.45. Do so while holding START + SELECT to boot udisk into format menu if you need to reformat your cart's file system.