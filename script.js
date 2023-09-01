
let audioElement=new Audio("")
let masterplay = document.getElementById("masterplay");
let myprogress = document.getElementById("progressbar"); 
let playbutton=document.querySelectorAll(".playbtn")

let songs = [
    { songname: "jhumka", filepath: "sounds/jhumka.mp3", coverpath: "images/jhumka.png" },
    { songname: "iraaday", filepath: "sounds/iradaay.mp3", coverpath: "images/iraaday.png" },
    { songname: "With you", filepath: "sounds/With_You_1.mp3", coverpath: "images/with you.png" },
    { songname: "Baarishein", filepath: "sounds/baarishein.mp3", coverpath: "images/baarishein.png" },
    { songname: "babambole", filepath: "sounds/babambole.mp3", coverpath: "images/babam bole.png" },
    { songname: "Sankatmochan", filepath: "sounds/Sankatmochan.mp3", coverpath: "images/sankatmochan.png" },
];

masterplay.addEventListener("click", function () {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    } else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
    }
});

audioElement.addEventListener("timeupdate", function () {
   
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogress.value = progress;
});
myprogress.addEventListener('change',()=>{
    audioElement.currentTime=myprogress.value*audioElement.duration/100;
})

var song=document.querySelectorAll(".songbanner")
song.forEach((element) => {
    element.addEventListener("click",()=>{
        const songName = element.getAttribute("data-song");
        
        const selectedSong = songs.find((song) => song.songname === songName);

        if (selectedSong) {
            audioElement.src = selectedSong.filepath;
            audioElement.play();
        }
      
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterplay.classList.remove('fa-play');
            masterplay.classList.add('fa-pause');
            element.querySelector(".playbtn").classList.remove('fa-play')
            element.querySelector('.playbtn').classList.add('fa-pause')
        } else {
            audioElement.pause();
            masterplay.classList.remove('fa-pause');
            masterplay.classList.add('fa-play');
            element.querySelector(".playbtn").classList.remove('fa-pause')
            element.querySelector('.playbtn').classList.add('fa-play')
        }
      
    });
});

song.forEach((element)=>{
    element.addEventListener("dblclick",()=>
    {
        audioElement.pause()
        masterplay.classList.remove('fa-pause');
            masterplay.classList.add('fa-play');
            element.querySelector(".playbtn").classList.remove('fa-pause')
            element.querySelector('.playbtn').classList.add('fa-play')
    })
})
    


//switch statement

switch(song)
{
    case("jhumka"):
    var jhumka=new Audio("sounds/jhumka.mp3");
    jhumka.play()
    break;
    case("iraaday"):
    var iraaday=new Audio("sounds/iradaay.mp3");
    iraaday.play()
    break;
    case("withyou"):
    var withyou=new Audio("sounds/withyou.mp3");
withyou.play();
    break;
    case("baarishein"):
    var baarishein=new Audio("sounds/baarishein.mp3");
    baarishein.play()
    break;
    case("babambole"):
    var babambole=new Audio("sounds/babambole.mp3");
    babambole.play()
    break;
    case("sankatmochan"):
    var sankatmochan=new Audio("sounds/Sankatmochan.mp3");
    sankatmochan.play()
    break;
    default:
    console.log("song");

}