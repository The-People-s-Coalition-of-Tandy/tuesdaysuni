function soundToggle(e){
    const audio = document.getElementById("player");
    player.paused ? player.play() : player.pause();
    player.paused ? e.src="../Assets/muted.png" : e.src="../Assets/soundOn.png";
}