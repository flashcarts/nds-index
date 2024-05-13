{% if include.amaze3ds == "true" %}
{% assign bl2ck_ver = "BL2CK 1.31.0 (Amaze3DS)" %}
{% elsif include.edgei == "true" %}
{% assign bl2ck_ver = "BL2CK 1.31.0 (EDGEi)" %}
{% elsif include.r4dspro == "true" %}
{% assign bl2ck_ver = "BL2CK 1.31.0 (r4dspro.com)" %}
{% else %}
{% assign bl2ck_ver = "BL2CK 1.31.0" %}
{% endif %}

### Setup Instructions (BL2CK)
1. [Format the SD card you are using to FAT32](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
1. Download {{ bl2ck_ver }}
1. Extract the {{ bl2ck_ver }} .zip file to your SD card root.
1. Place any `.nds` game ROMs you'd like to play into a folder of your choice which isn't the `__rpg` folder.
    - (Optional) You may want to create a `Games` folder to store your ROMs in to keep the root of your SD card organised.