### Setup Instructions (YSMenu)

1. [Format the SD card you are using to FAT32](https://wiki.hacks.guide/wiki/Formatting_an_SD_card)
1. Download RetroGameFan YSMenu Fork 7.06
1. Extract the YSMenu .7z you downloaded using 7-zip or similar, then go into the `R4SDHC YSMenu` folder.
1. From this folder, copy the following files/folders to your SD card root.
    - `_PATCH` folder
    - `_system_` folder
    - `Games` folder
    - `TTMenu` folder
    - `_DS_MENU.DAT`
    - `_DS_MENU.INI`
    - `_DS_MENU.SYS`
    - `DEFAULT.nds`
    - `r4dldi.dat`
1. Locate the `YSMenu.ini` file in the `TTMenu` folder. Open this file in a suitable text editor.
1. Edit line 16 to change it from `;AUTO_BOOT=` to `AUTO_BOOT=AUTOBOOT.NDS`
    - This will change the file which YSMenu autoboots to `AUTOBOOT.NDS`. This will prevent YSMenu from entering a bootloop.
1. Place any `.nds` game ROMs you'd like to play into the `Games` folder.