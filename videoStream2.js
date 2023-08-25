var url = ".\\dashFiles\\out.mpd"
var player = dashjs.MediaPlayer().create()

player.initialize(document.querySelector("#myVideo"),url,true)