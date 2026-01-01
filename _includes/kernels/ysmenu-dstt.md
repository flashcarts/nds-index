### Setup Instructions (YSMenu)

1. [Format the SD card you are using to FAT32](https://dsi.cfw.guide/sd-card-setup.html)
1. Download RetroGameFan YSMenu Fork 7.06
1. Extract the YSMenu .7z you downloaded using 7-zip or similar, then go into the `DSTTi-Clone YSMenu` folder.
1. From this folder, copy the following files/folders to your SD card root.
    - `Games` folder
    - `TTMenu` folder
    - `TTMenu.dat`
{% if include.ysmenu_altBootFile %}
1. Make a copy of `TTMenu.dat` and rename it to `{{ include.ysmenu_altBootFile }}`.
{% endif %}
{% if include.timebomb == "true" %}
1. Download [DEMON YSMenu nds-miniboot](https://archive.flashcarts.net/YSMenu/DEMON_common/R4.dat).
1. Copy `R4.dat` to the root of your SD card.
{% endif %}
1. Place any `.nds` game ROMs you'd like to play into the `Games` folder.
