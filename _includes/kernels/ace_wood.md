{% if include.r4ils %}
    {% assign cart = "R4iLS" %}
{% elsif include.gateway %}
    {% assign cart = "Gateway Blue" %}
{% else %}
    {% assign cart = "Ace3DS+"%}
{% endif %}

### Setup Instructions ({{ cart }} Wood 1.62)
1. Download {{ cart }} Wood 1.62
1. Extract the {{ cart }} Wood 1.62 .zip to your SD card root.
1. Place any `.nds` game ROMs you'd like to play into a folder of your choice which isn't the `__rpg` folder.
    - (Optional) You may want to create a `Games` folder to store your ROMs in to keep the root of your SD card organised.

#### Setup Instructions (AOS)
AOS is a multi-loader for Ace3DS+ and related carts. You can find a link to an updated repack here: <https://github.com/flashcarts/AOS>

1. Download AOS for {{ cart }}
1. Extract the AOS for {{ cart }} .zip to your SD card root.
1. Place any game ROMs you'd like to play into a folder of your choice which isn't the `__rpg` folder.
    - (Optional) You may wish to use the `/roms/` folder structure which comes with AOS for easy organisation. For instance, `.gba` ROMs will go into the `/roms/gba/` folder, `.nds` ROMs will go into the `/roms/nds/` folder, etc.