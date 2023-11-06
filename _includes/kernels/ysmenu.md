### Setup Instructions (YSMenu)

1. [Format the SD card you are using to FAT32](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
1. Download RetroGameFan YSMenu Fork 7.06
1. Extract the YSMenu .7z you downloaded using 7-zip or similar, then go into the `DSTTi-Clone YSMenu` folder.
1. From this folder, copy the following files/folders to your SD card root.
    - `Games` folder
    - `TTMenu` folder
    - `TTMenu.dat`
{% if include.ysmenu_altBootFile %}
1. Make a copy of `TTMenu.dat` and rename it to `{{ include.ysmenu_altBootFile }}`.
{% endif %}
1. Place any `.nds` game ROMs you'd like to play into the `Games` folder.
