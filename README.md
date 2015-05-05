#Stroke
![Stroke](https://raw.githubusercontent.com/active9/stroke/master/stroke.png)

A Keyboard & Mouse Remote Control Solution

##SECURITY
WARNING: Stroke does not provide any security mechanisms to secure the data channel with commands. In order to have a secured data channel you would need to fork the stroke repo from github and establish your own security measures.

##Introduction
Stroke is a simple tcp/http server for interacting with Java AWT Bot class. This enables request based cursor & keyboard input to manipulate the host machines peripherals via http requests. In short Stroke is a Web Based Mouse & Keyboard Server.

##Installing
```bash
npm install stroke -g
```
##USING
Stroke is used as a stand-alone application. Now that you have Stroke installed you can start stroke by calling:
```bash
stoke
```
visit http://localhost.rocks:5703/ to view all available remote keyboard & mouse commands. The calls to access stroke features are also listed below:

##COMMANDS
**/press/:key**
```bash
http://localhost.rocks:5703/press/a
```
This would push down the a button on the hosts keyboard.

**/release/:key**
```bash
http://localhost.rocks:5703/release/a
```
This would release the a button from being pressed on the hosts keyboard.

**/type/:key**
```bash
http://localhost.rocks:5703/type/a
```
This will type a on the hosts keyboard.

**/sleep/:mil**
```bash
http://localhost.rocks:5703/sleep/100
```
This will make the command input on the host machine wait for 100 milliseconds.

**/mouse/move/:x/:y**
```bash
http://localhost.rocks:5703/mouse/move/0/0
```
This will move the hosts mouse to position 0,0 (Top Left of the Screen)

**/mouse/press/:buttons**
```bash
http://localhost.rocks:5703/mouse/press/13
```
This will press mouse buttons 1 and 3 at the same time on the host.

**/mouse/release/:buttons**
```bash
http://localhost.rocks:5703/mouse/release/13
```
This will release mouse buttons 1 and 3 at the same time on the host.

**/mouse/press/:buttons/:delay**
```bash
http://localhost.rocks:5703/mouse/click/1/100
```
This will click mouse button one with a 100ms delay before releasing on the host.

**/mouse/wheel/:amount**
```bash
http://localhost.rocks:5703/mouse/wheel/100
```
This will move the mouse wheel by an amount of 100 on the host machine.


## KEYS

Because this library uses java and the AWT BOT event class the following key codes are useable:
http://docs.oracle.com/javase/7/docs/api/java/awt/event/KeyEvent.html

"ESC"
"F1"
"F2"
"F3"
"F4"
"F5"
"F6"
"F7"
"F8"
"F9"
"F10"
"F11"
"F12"
"CTRL"
"META"
"ALT"
" "
"SPACE"
"LEFT"
"DOWN"
"RIGHT"
"UP"
"TAB"
"SHIFT"
"ENTER"
"\n"
"CAPS_LOCK"
"PRINT_SCREEN"
"SCROLL_LOCK"
"PAUSE_BREAK"
"BACKSPACE"
"DELETE"
"HOME"
"END"
"INSERT"
"PAGE_UP"
"PAGE_DOWN"
"NUM_LOCK"
"`"
"-"
"="
"["
"]"
"\\"
";"
"'"
","
"."
"/"
"KP_ADD"
"KP_-"
"KP_*"
"KP_/"
"KP_0"
"KP_."
"KP_1"
"KP_2"
"KP_3"
"KP_4"
"KP_5"
"KP_6"
"KP_7"
"KP_8"
"KP_9"

##CONTRIBUTING

We encourage forking. Feel free to fork & pull your new additions, or bug fixes.