---
title: M3 DS Real and M3i Zero (Non GMP-Z003)
creator: M3 Adapter
description:
categories:
- m3
- sakura
- ysmenu
sdhc: true
dsi: No
3ds: No
downloads:
  RetroGameFan YSMenu Fork 7.06:
    url: https://gbatemp.net/download/35737/download
  M3DS Sakura 1.49a:
    url: https://flashcard-archive.ds-homebrew.com/m3adapter.com/m3adapter.com_GMP-Z003_Sakura_1.49a.zip
images:
- url: /assets/images/cards/m3-ds-real/front.png
website: https://web.archive.org/web/20140106055622/http://m3adapter.com/
---

The M3 DS Real is the second Slot-1 flashcart from the M3 Adapter team. As the M3 team stopped updating Sakura around 2011, the Sakura kernel is unable to play quite a few games that were released later on in the DS lifespan. It is recomended to use YSMenu as either the primary kernel, or as a dual-boot kernel so you can fallback to YS for games that fail to load on Sakura.

While this cart does supports SDHC SD cards, Sakura/TouchPod has issues with cards that are 64GB or larger. The nds loader will simply refuse to load games, or load the game but crash/freeze soon after. Note that YSMenu handles 64GB and larger cards just fine on the M3 DS Real, when configured as primary kernel.

{% include kernels/ysmenu-m3.md %}
