/* VIDEO */
let video = document.querySelector('video');
let botonPlay = document.getElementById("play");
let botonPause = document.getElementById("pause");

botonPlay.addEventListener('click',()=>{
    video.play()
})

botonPause.addEventListener('click',()=>{
    video.pause()
})


let Time = document.getElementById("Time");
Time.innerHTML = video.duration;



video.addEventListener("play", ()=> {console.log("El video ha iniciado")});
video.addEventListener("pause", ()=> {console.log("El video ha sido pausado")});
video.addEventListener("ended", ()=> {alert("Video finalizado")});


