---
title: Gateway Blue
creator: Gateway
sdhc: true
dsi: Latest firmware
3ds: Latest firmware
downloads:
  Gateway Blue Wood R4 1.62:
    url: https://mirrors.lifehacker101.net/flashcard-archive//Gateway_Blue/Gateway_Blue_Wood_R4_1.62.zip
  AOS for Gateway:
    url: https://github.com/flashcarts/AOS/releases/latest/download/AOS_Gateway.zip
images:
- url: /assets/images/cards/gateway-blue/front.jpg
- url: /assets/images/cards/gateway-blue/front_pcb.jpg
- url: /assets/images/cards/gateway-blue/back_pcb.jpg
cheats: 
- kernel: "Gateway_Blue_Wood_R4_1.62: SD:/_rpg/cheats/usrcheat.dat"
- kernel: "AOS_Gateway: SD:/_rpg/cheats/usrcheat.dat"
website: https://web.archive.org/web/20171004001105/http://www.gateway-3ds.com/
---

Gateway3DS was a bundle of two flashcarts, a red 3DS flashcart and a blue DS flashcart. The blue DS cart was needed at the time to run the exploit that would allow the red 3DS cart to work. This page will not detail on how to get the red 3DS cart working as the focus here is on the blue DS cart.

The Gateway Blue was based on the R4iLS flashcart. The main difference between the two was that they used a different header on the boot file, `R4IT` for Gateway Blue, `R4XX` for R4iLS. Other than that, they mostly act the same.

{% include kernels/ace_wood.md gateway=true %}
