var songInfo = [
    {
        songName:"1 hour best Japanese acoustic songs",
        path:"./musicStorage/1_hour_best_acoustic_japanese_songs_2019_make_you_relax_and_for_sleep_2448634379545793645.mp3",
        img_bgr:"./backgroundImages/anime-girl-kimono-uhd-4k-wallpaper-768x432.jpg"
      
    },
    {
        songName:"Coding session lofi beats",
        path:"./musicStorage/3_30_am_coding_session_lofi_hip_hop_mix_study_coding_beats_781925082186375367.mp3",
        img_bgr:"./backgroundImages/anime-girl-headphones-looking-away-4k-ls-3840x2160.jpg"
       

        
    },
    {
        songName:"Peaceful monoman",
        path:"./musicStorage/peaceful_relaxing_soothing_meditation_monoman_7497946827036956711.mp3",
        img_bgr:"./backgroundImages/anime-girl-fox-mask-wallpaper-1440x900_4.jpg"
        
        
    },
    {
        songName:"Samurai Japanese lofi hiphop mix",
        path:"./musicStorage/samurai_japanese_lofi_hiphop_mix_7iSVCXMByoK-gucZxXEZ.mp3",
        img_bgr:"./backgroundImages/27e4160b0e3d0b90cbcf6aee8e133951.jpg"
        
        
    },
    {
        songName:"Top 2020 acoustic songs",
        path:"./musicStorage/top_acoustic_songs_2020_collection_best_guitar_acoustic_cover_of_popular_love_songs_of_all_time_-4722047592500098560.mp3",
        img_bgr:"./backgroundImages/1600x900_cute-anime-girl-4k.jpg"
        
       
    },
    {
        songName:"Zelda chill",
        path:"./musicStorage/zelda_chill_-2227477780082315099.mp3",
        img_bgr:"./backgroundImages/anime-girl-in-city-4k-oj-1920x1080.jpg"
        
    
        
    },
    {
        songName:"Peaceful piano soft rain",
        path:"./musicStorage/peaceful_piano_soft_rain_relaxing_sleep_music_a_bitter_rain_HQDLBnMByoK-gucZGfTw.mp3",
        img_bgr:"./backgroundImages/wp6137562.jpg"
        
    }
]



// SONG SELECTION PORTION
var sep = 0;
var songSelect = document.getElementsByClassName("songSelection")[0];
var controls = document.getElementsByClassName("songControls")[0];
var songs = songInfo.length;
//style everything inside song selection part
for(let i = 0; i < songs ; i++){
    var createDiv = document.createElement("div");
    var child = songSelect.appendChild(createDiv);
  
    child.style.marginTop = "50px";
    child.style.width = "90%";
    child.style.height = "fit-content";
    child.style.border = "1px solid gray";
    child.style.display = "flex";
    child.style.borderRadius = "12px";
    
   

   
}
const all = document.querySelectorAll(".songSelection div");
for(let i = 0; i < songs; i++){
    var description = document.createElement("p");
    var addP = all[i].appendChild(description);
    addP.style.height = "100%";
    addP.style.width = "10%";
    addP.style.boxSizing = "border-box";
    addP.style.fontSize = "1vw";
    addP.style.fontFamily = "monospace";
    addP.style.boxSizing = "border-box";
    addP.style.textAlign = "center";
    addP.style.padding = "2%";
    addP.textContent = songInfo[i].songName;
    
}

for(let i = 0; i < songs; i++){
    var nestDiv = document.createElement("div");
    var bgr_div = all[i].appendChild(nestDiv);
    bgr_div.style.width = "75%";
    bgr_div.style.backgroundImage = "url" + "(" + songInfo[i].img_bgr + ")";
    bgr_div.style.backgroundSize = "cover";
    bgr_div.style.backgroundRepeat = "no-repeat";
    bgr_div.style.marginLeft = "10%";
    bgr_div.style.height = "101%";
    bgr_div.style.opacity = "0.6";
}

var spin = document.getElementById("spin_song");
var text = document.getElementById("change");
var play = false;
for(let i = 0; i < songs; i++){
    all[i].addEventListener("mouseover", () => move(all[i], i));
    all[i].addEventListener("click", () => {
        document.getElementById("name").innerText = songInfo[i].songName;
        document.getElementById("name").style.textAlign = "center";
        document.getElementById("name").style.fontSize = "2.75vw";
        spin.style.backgroundImage = "url" + "(" + songInfo[i].img_bgr + ")";
        spin.style.backgroundSize = "cover";
        spin.classList.add("spin_animate");

        text.innerText = "--Playing--";
        spin.style.display = "inline";
        btn.style.display = "inline";

        changeBoxShadow(i);

        playSong(i);

        
      //Onclick song => active play button on state change
    });
}
function changeBoxShadow(songNum){
    for(let i = 0; i < songs; i++){
        if(i !== songNum){
            all[i].style.boxShadow = "";
        }
    }
    all[songNum].style.boxShadow = "rgba(190, 46, 170, 0.4) 5px 5px, rgba(190, 46, 170, 0.3) 10px 10px, rgba(190, 46, 170, 0.2) 15px 15px, rgba(190, 46, 170, 0.1) 20px 20px, rgba(190, 46, 170, 0.05) 25px 25px";
}



function move(elem, num){
    elem.classList.add("animation1");
    elem.classList.remove("return");
    for(let k = 0; k < songs; k++){
        if(k != num){
            all[k].classList.replace("animation1", "return");
        }
    }
}


//play button animation:

var btn = document.querySelector(".button");
btn.addEventListener("click", () => state(play));
function state(turn){
    if(turn == true){
        btn.classList.add("paused");
        play = false;
        take(play);
        spin.classList.add("spin_animate");
        text.innerText = "--Playing--";
    }
    else if(turn == false){
        btn.classList.remove("paused");
        play = true; 
        take(play);  
        spin.classList.remove("spin_animate");
        text.innerText = "--Paused--";
    }
 }
 var track = document.getElementById("track");

 function take(state){
     if(state == false){
         track.play();
     }
     else if(state == true){
         track.pause();
     }
 }
 function playSong(songNum){
     state(true);
     track.setAttribute("src", songInfo[songNum].path);
     track.play();
 }







//Add effect on mouseover + cancel on mouse (animations not smooth :<)
/*
var k = false;
const all = document.querySelectorAll(".songSelection div");
var animate = {
    selectMove: (elem, num) =>{
    gsap.to(elem, {marginLeft:"60%", duration:0.5 });
    for(let n = 0; n < songs; n++){
        if(n !== num){
            var leftM = gsap.getProperty(all[n], "marginLeft");
            gsap.fromTo(all[n], {marginLeft:leftM}, {marginLeft:0, duration:0.25, onComplete:()=>{k = false}});
        }
    };
    }
}
for(let i = 0; i < songs ; i++){
    all[i].addEventListener("mouseover", () => {
       if(k == false){
            animate.selectMove(all[i],i);
            k = true;
       }
        
    });
}
*/










