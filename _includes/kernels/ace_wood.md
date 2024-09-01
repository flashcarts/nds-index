{% if include.r4ils %}
    {% assign wood = "Ace3DS+/R4iLS" %}
    {% assign aos = "R4iLS" %}
{% elsif include.gateway %}
    {% assign wood = "Gateway Blue" %}
    {% assign aos = "Gateway" %}
{% else %}
    {% assign wood = "Ace3DS+/R4iLS" %}
    {% assign aos = "Ace3DSPlus" %}
{% endif %}

This flashcart will use ACE Wood 1.62, not to be confused with R4 Wood 1.62. ACE Wood 1.62 is based on an old version of R4 Wood from when it was open source, and adds some patches on top of it to support more modern games. However, it is missing some anti-piracy patches for newer games (notably Pokemon Black/White 2).

### Setup Instructions ({{ wood }} Wood 1.62)
1. Download {{ wood }} Wood 1.62
1. Extract the {{ wood }} Wood 1.62 .zip to your SD card root.
1. Place any `.nds` game ROMs you'd like to play into a folder of your choice which isn't the `__rpg` folder.
    - (Optional) You may want to create a `Games` folder to store your ROMs in to keep the root of your SD card organised.

#### Setup Instructions (AOS)
AOS is a multi-loader for Ace3DS+ and related carts. You can find a link to an updated repack here: <https://github.com/flashcarts/AOS>

1. Download AOS for {{ aos }}
1. Extract the AOS for {{ aos }} .zip file to your SD card root.
1. Place any game ROMs you'd like to play into a folder of your choice which isn't the `__rpg` folder.
    - (Optional) You may wish to use the `/roms/` folder structure which comes with AOS for easy organisation. For instance, `.gba` ROMs will go into the `/roms/gba/` folder, `.nds` ROMs will go into the `/roms/nds/` folder, etc.