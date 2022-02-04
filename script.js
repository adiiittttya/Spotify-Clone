console.log("Welcome to Spotify")

let songIndex = 1;
let playbutton = document.getElementById("playbutton");
let audioElement = new Audio("songs/1.mp3");
let range = document.getElementById("range");
let gif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName("songs"));
let masterplay = document.getElementsByClassName("far masterplay fa- fa-play-circle")
let songs = [
    { songName: "Excuses - AP Dhillon", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Old Town Road -Lil Nas X", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Memories", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Peaches -Justin Bieber", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Better -Zayn Malik", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Beliver -Imagine Dragons", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Night Changes -One Direction", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Yellow -Coldplay", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Smack that -Akon", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Hollywood's Bleeding -Post Malone", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
]


playbutton.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        playbutton.classList.remove('fa-play-circle');
        playbutton.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        playbutton.classList.remove('fa-pause-circle');
        playbutton.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }

}
)
audioElement.addEventListener("timeupdate", () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    range.value = progress;
}
)
range.addEventListener('change', () => {
    audioElement.currentTime = range.value * audioElement.duration / 100; 
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("masterplay")).forEach((element)=>{
        element.classList.add("fa-play-circle");
        element.classList.remove('fa-pause-circle');
        
    })
}

    Array.from(document.getElementsByClassName("far masterplay fa- fa-play-circle")).forEach((element) => {
        element.addEventListener("click", (e) => {
            makeAllPlays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `songs/${songIndex}.mp3`;
            rangesong.innerText = songs[songIndex -1].songName;
            playbutton.classList.remove('fa-play-circle');
        playbutton.classList.add('fa-pause-circle');
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
           
            
        })
    })
    
document.getElementById("next").addEventListener("click" ,() =>{
    if(songIndex>=10){
        songIndex = 1;

    }
    else{
        songIndex +=1 ;
    }
    audioElement.src =`songs/${songIndex}.mp3`;
    rangesong.innerText = songs[songIndex -1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    if (audio.Element.stop) {
        
    }
})
document.getElementById("previous").addEventListener("click" ,() =>{
    if(songIndex<=1){
        songIndex = 10;

    }
    else{
        songIndex -=1 ;
    }
    audioElement.src =`songs/${songIndex}.mp3`;
    rangesong.innerText = songs[songIndex -1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
})
let timestamp = audioElement.currentTime;
 let time = getElementsByClassName("time").innerHTML = timestamp;