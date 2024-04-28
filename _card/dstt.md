---
title: DSTT
creator: DSTT Team
description:
categories:
- dstt
- ysmenu
sdhc: true
dsi: false
3ds: false
downloads:
  RetroGameFan YSMenu Fork 7.06:
    url: https://gbatemp.net/download/35737/download
images:
- url: /assets/images/cards/dstt/front2.png
- url: /assets/images/cards/dstt/back2.png
- url: /assets/images/cards/dstt/pcb-back2.JPG
- url: /assets/images/cards/dstt/front.jpeg
- url: /assets/images/cards/dstt/back.jpeg
- url: /assets/images/cards/dstt/pcb-back.jpeg
- url: /assets/images/cards/dstt/pcb-front.jpeg
website: https://web.archive.org/web/20100929204330/http://ndstt.com/
---

This flashcart is a half-baked clone of the DSOne SDHC. YSMenu or RGF's (safe) TTMenu repack are the best kernels to use on this cart as they have the most up-to-date loaders and patches available.

There were a number of different revisions of the DSTT. As a result of this, it is harder to distinguish a clone from the real thing. Stock TTMenu had malware baked into it. If it detected that your DSTT was a clone, it would brick your cart. We do not recommend running stock TTMenu on your DSTT. Instead, you should opt for the alternatives mentioned above.

Note that while YSMenu is pretty reliable when it comes to retail games, it often fails to load romhacks. If you want to play romhacks on this cart, using TWiLight Menu++ with nds-bootstrap as a dual-boot kernel is suggested. To set it up, follow steps 1-6 of the [TWiLight Menu guide](https://wiki.ds-homebrew.com/twilightmenu/installing-flashcard). Afterwards, simply launch BOOT.NDS in the menu to load into TWiLight.

{% include kernels/ysmenu-dstt.md %}
