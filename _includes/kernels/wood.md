{% if include.rpg %}
    {% assign wood = "RPG " %}
{% else %}
    {% assign wood = "R4 " %}
{% endif %}
{% assign wood_ver = wood | append: include.wood %}

### Setup Instructions (Wood {{ wood_ver }})
1. [Format the SD card you are using to FAT32](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
1. Download Wood {{ wood_ver }}
1. Extract the Wood {{ wood_ver }} .zip file to your SD card root.
1. Place any `.nds` game ROMs you'd like to play into a folder of your choice which isn't the `__rpg` folder.
    - (Optional) You may want to create a `Games` folder to store your ROMs in to keep the root of your SD card organised.