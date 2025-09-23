---
title: R4DS Pro
creator: r4dspro.com
description:
categories:
- bl2ck
- r4dspro
sdhc: true
dsi: false
3ds: false
downloads:
  BL2CK 1.31.0 (r4dspro.com):
    url: https://archive.flashcarts.net/BL2CK/BL2CK_1.31.0_r4dspro.com.zip
  r4dspro.com Kernel 1.50:
    url: https://archive.flashcarts.net/r4dspro.com/old/r4dspro.com_Kernel_1.50.zip
images:
-  url: /assets/images/cards/r4dspro-com/nolabel_back.jpg
-  url: /assets/images/cards/r4dspro-com/nolabel_front.jpg
-  url: /assets/images/cards/r4dspro-com/pcb_front.jpg
-  url: /assets/images/cards/r4dspro-com/pcb_back.jpg
cheats:
- kernel: "BL2CK 1.31.0: SD:/_rpg/cheats/usrcheat.dat"
- kernel: "r4dspro.com v1.50: SD:/_system_/cheat.dat"
---

This flashcart supports BL2CK OS as it is Acekard 2 based. It is not compatible with AKAIO. This flashcart is currently being sold on AliExpress without a label.
Sleep mode is not functional on this cart and multi-block DLDI does not work correctly and can cause filesystem corruption. The included BL2CK OS download has been modified to use single-block DLDI to fix this.

Do not attempt to run YSMenu on this flashcart, doing so will cause it to **brick**!

{% include kernels/bl2ck.md r4dspro=true %}
