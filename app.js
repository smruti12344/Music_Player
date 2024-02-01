//music test
const music = new Audio('./music/arjit.mp3');
// music.play();

// create Array
const songs = [
    {
        id:'1',
        songName:`Phir Aur Kya Chahiye <br>
        <div class="sub-title">Arjit Sing</div>`,
        poster:"../image/music1.jpg"

    },
    {
        id:'2',
        songName:`Phir Aur Kya Chahiye <br>
        <div class="sub-title">Arjit Sing</div>`,
        poster:"../image/music2.jpg"

    },
    {
        id:'3',
        songName:`Phir Aur Kya Chahiye <br>
        <div class="sub-title">Arjit Sing</div>`,
        poster:"../image/music3.jpg"

    },
    {
        id:'4',
        songName:`Phir Aur Kya Chahiye <br>
        <div class="sub-title">Jubin Nautiyal</div>`,
        poster:"../image/music4.jpg"

    },
    {
        id:'5',
        songName:`Phir Aur Kya Chahiye <br>
        <div class="sub-title">Arjit Sing</div>`,
        poster:"../image/music5.jpg"

    },
    {
        id:'6',
        songName:`Phir Aur Kya Chahiye <br>
        <div class="sub-title">Arjit Sing</div>`,
        poster:"../image/music6.jpg"

    },
    {
        id:'7',
        songName:`Jhoome Jo Pathaan
        Song
         <br>
        <div class="sub-title">Arjit Sing</div>`,
        poster:"../image/music7.jpg"

    },
    {
        id:'8',
        songName:`Dil Diyan Gallan Song <br>
        <div class="sub-title">Vishal-Shekhar,
        Atif Aslam,
        Irshad Kamil</div>`,
        poster:"../image/music8.jpg"

    },
    {
        id:'9',
        songName:`Deewana kar Raha Hai Lyrical  <br>
        <div class="sub-title">Emraan Hashmi</div>`,
        poster:"../image/music9.jpg"

    },
    {
        id:'10',
        songName:`Raabta Title Song <br>
        <div class="sub-title"> Pritam,Jam</div>`,
        poster:"../image/music10.jpg"

    },
    {
        id:'11',
        songName:`Aao Raja <br>
        <div class="sub-title">Yo Yo Honey Singh</div>`,
        poster:"../image/music11.jpg"

    },
    {
        id:'12',
        songName:` HAR MAIDAAN FATEH <br>
        <div class="sub-title">Rajkumar Hirani</div>`,
        poster:"../image/music12.jpg"

    },
    {
        id:'13',
        songName:`Jaan Hai Meri <br>
        <div class="sub-title">Armaan M,</div>`,
        poster:"../image/music13.jpg"

    },
    {
        id:'14',
        songName:`Baarish  <br>
        <div class="sub-title"> Atif Aslam</div>`,
        poster:"../image/music14.jpg"

    },
    {
        id:'15',
        songName:`KAUN TUJHE Lyrical  <br>
        <div class="sub-title"> Amaal Mallik Palak</div>`,
        poster:"../image/music15.jpg"

    },
    {
        id:'16',
        songName:`Phir Aur Kya Chahiye <br>
        <div class="sub-title">Arjit Sing</div>`,
        poster:"../image/music16.jpg"

    },
    {
        id:'17',
        songName:`Phir Aur Kya Chahiye <br>
        <div class="sub-title">Arjit Sing</div>`,
        poster:"../image/music17.jpg"

    },
]
Array.from(document.getElementsByClassName("songItem")).forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src=songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
})

let masterPlay = document.getElementById("masterplay");
/*--------------------- wave ------*/
let wave = document.getElementsByClassName("wave")[0];
masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime<=0){
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    }
    else{
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
})
const makeAllPlays= () =>{
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((element)=>{
       element.classList.add('bi-play-circle-fill');
       element.classList.remove('bi-pause-circle-fill');
});
}

const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
       element.style.background=`rgba(53, 162, 159,0)`;
    //    element.style.color ="white";
});
}
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
let musicIndex=0;
/*-------------side-menu-play-btn----------*/
Array.from(document.getElementsByClassName('playlistPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
   musicIndex=e.target.id;
//    console.log(musicIndex);
makeAllPlays();
   e.target.classList.remove('bi-play-circle-fill');
   e.target.classList.add('bi-pause-circle-fill');
   poster_master_play.src = `./image/music${musicIndex}.jpg`;
   music.src=`./music/arjit.mp3`;
   music.play();
/*------------song_tilte------------*/
let song_tilte = songs.filter((elm)=>{
    return elm.id==musicIndex;
});
song_tilte.forEach((ele)=>{
    // console.log(ele);
    // compare songName value with ele
    let {songName}= ele;
    // console.log(songName);
    title.innerHTML=songName;
})
masterPlay.classList.remove('bi-play-fill');
masterPlay.classList.add('bi-pause-fill');
wave.classList.add('active2');

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[`${musicIndex-1}`].style.background=`rgba(53, 162, 159,0.2)`;
    // element.style.color ="orange";
    })
})


//music range-time

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentend");
// music rang-bar
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

// musictime update
 
music.addEventListener('timeupdate',()=>{
    let music_curr_time = music.currentTime;
    let music_duration = music.duration;
//convert in min or sec
    let Endmin = Math.floor(music_duration/60);
    // console.log(min);
    let Endsec = Math.floor(music_duration%60);
    // console.log(sec);
//  sec<10
if(Endsec<10){
    Endsec=`0${sec}`;
}
currentEnd.innerHTML=`${Endmin}:${Endsec}`;
//starting time
let StartMin = Math.floor(music_curr_time/60);
let StartSec = Math.floor(music_curr_time%60);
if(StartSec<10){
    StartSec=`0${StartSec}`;
}
currentStart.innerHTML=`${StartMin}:${StartSec}`


let progressBar = parseInt((music.currentTime/music.duration)*100);
seek.value = progressBar;
let seekBar = seek.value;
bar2.style.width = seekBar+"%";
dot.style.left = seekBar+"%";
})

// music seek_bar

seek.addEventListener('change',()=>{
    music.currentTime = seek.value*music.duration/100;
})

// music_ended
music.addEventListener('ended',()=>{
    if(musicIndex==songs.length){
        musicIndex=1;
    }
    musicIndex++;
    poster_master_play.src = `./image/music${musicIndex}.jpg`;
    music.src=`./music/arjit.mp3`;
     music.play();
 /*------------song_tilte------------*/
 let song_tilte = songs.filter((elm)=>{
     return elm.id==musicIndex;
 });
 song_tilte.forEach((ele)=>{
     // console.log(ele);
     // compare songName value with ele
     let {songName}= ele;
     // console.log(songName);
     title.innerHTML=songName;
 })
 makeAllPlays();
 document.getElementById(`${musicIndex}`).classList.remove('bi-play-fill');
 document.getElementById(`${musicIndex}`).classList.add('bi-pause-fill');
 makeAllBackground();
 Array.from(document.getElementsByClassName('songItem'))[`${musicIndex-1}`].style.background=`rgba(53, 162, 159,0.2)`;
 })

//volume -bar
let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_dot = document.getElementById("vol_Dot");
let vol_bar = document.getElementsByClassName("vol_bar")[0];

vol.addEventListener('change',()=>{
    if(vol.value== 0){
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.add("bi-volume-mute-fill");
        vol_icon.classList.remove("bi-volume-up-fill");
        
    }
     if(vol.value>0){
        vol_icon.classList.add("bi-volume-down-fill");
        vol_icon.classList.remove("bi-volume-mute-fill");
        vol_icon.classList.remove("bi-volume-up-fill");
        
    }
    if(vol.value>50){
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.remove("bi-volume-mute-fill");
        vol_icon.classList.add("bi-volume-up-fill");
        
    }
    let vol_a = vol.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_dot.style.left=`${vol_a}%`;
    music.volume=vol_a/100;
})
// move back button
 let back = document.getElementById("back");
 back.addEventListener('click',()=>{
    musicIndex-=1;
    if(musicIndex<1){
        musicIndex= Array.from(document.getElementsByClassName("songItem")).length;
    }
    poster_master_play.src = `./image/music${musicIndex}.jpg`;
    music.src=`./music/arjit.mp3`;
    music.play();
    document.getElementById(`${musicIndex}`).classList.remove('bi-play-fill');
 document.getElementById(`${musicIndex}`).classList.add('bi-pause-fill');
 /*------------song_tilte------------*/
 let song_tilte = songs.filter((elm)=>{
     return elm.id==musicIndex;
 });
 song_tilte.forEach((ele)=>{
     // console.log(ele);
     // compare songName value with ele
     let {songName}= ele;
     // console.log(songName);
     title.innerHTML=songName;
 })
 makeAllPlays();
 document.getElementById(`${musicIndex}`).classList.remove('bi-play-fill');
 document.getElementById(`${musicIndex}`).classList.add('bi-pause-fill');
 makeAllBackground();
 Array.from(document.getElementsByClassName('songItem'))[`${musicIndex-1}`].style.background=`rgba(53, 162, 159,0.2)`;
 })


 // move next button
 let next = document.getElementById("next");

 next.addEventListener('click',()=>{
    musicIndex-=0;
    musicIndex+=1;
    if(musicIndex>Array.from(document.getElementsByClassName("songItem")).length){
       musicIndex=1;
    }
    poster_master_play.src = `./image/music${musicIndex}.jpg`;
    music.src=`./music/arjit.mp3`;
     music.play();
 /*------------song_tilte------------*/
 let song_tilte = songs.filter((elm)=>{
     return elm.id==musicIndex;
 });
 song_tilte.forEach((ele)=>{
     // console.log(ele);
     // compare songName value with ele
     let {songName}= ele;
     // console.log(songName);
     title.innerHTML=songName;
 })
 makeAllPlays();
 document.getElementById(`${musicIndex}`).classList.remove('bi-play-fill');
 document.getElementById(`${musicIndex}`).classList.add('bi-pause-fill');
 makeAllBackground();
 Array.from(document.getElementsByClassName('songItem'))[`${musicIndex-1}`].style.background=`rgba(53, 162, 159,0.2)`;
 }) 

//  left and right scroll music 

let left_Scroll = document.getElementById("left_scroll");
let right_scroll = document.getElementById("right_scroll");
let pop_song = document.getElementsByClassName("pop_song")[0];

left_Scroll.addEventListener('click',()=>{
    pop_song.scrollLeft-=330;
})
right_scroll.addEventListener('click',()=>{
    pop_song.scrollLeft+=330;
})



// left and right scroll singers

let left_ScrollArtist = document.getElementById("left_scrolls");
let right_scrollArtist = document.getElementById("right_scrolls");
let popularArtist = document.getElementsByClassName("item")[0];

left_ScrollArtist.addEventListener('click',()=>{
    popularArtist.scrollLeft-=330;
})
right_scrollArtist.addEventListener('click',()=>{
    popularArtist.scrollLeft+=330;
})

// shuffle

let shuffle = document.getElementsByClassName("shuffle")[0];
shuffle.addEventListener('click',()=>{
    let a = shuffle.innerHTML;
    // alert(a);
    switch(a) {
        case "next":
            shuffle.classList.add('bi-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML="repeat";

        break;
        case "repeat":
            shuffle.classList.remove('bi-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML="random";
            break;
            case "random":
                shuffle.classList.remove('bi-repeat');
                shuffle.classList.add('bi-music-note-beamed');
                shuffle.classList.remove('bi-shuffle');
                shuffle.innerHTML="next";
                break;
    }
})

// shuffle button

const next_music = ()=>{
   
    if(musicIndex==songs.length){
        musicIndex=1;
    }

    musicIndex+=1;
    poster_master_play.src = `./image/music${musicIndex}.jpg`;
    music.src=`./music/arjit.mp3`;
     music.play();
 /*------------song_tilte------------*/
 let song_tilte = songs.filter((elm)=>{
     return elm.id==musicIndex;
 });
 song_tilte.forEach((ele)=>{
     // console.log(ele);
     // compare songName value with ele
     let {songName}= ele;
     // console.log(songName);
     title.innerHTML=songName;
 })
 makeAllPlays();
 document.getElementById(`${musicIndex}`).classList.remove('bi-play-fill');
 document.getElementById(`${musicIndex}`).classList.add('bi-pause-fill');
 makeAllBackground();
 Array.from(document.getElementsByClassName('songItem'))[`${musicIndex-1}`].style.background=`rgba(53, 162, 159,0.2)`;
}

const repeat_music = ()=>{
   musicIndex;
    poster_master_play.src = `./image/music${musicIndex}.jpg`;
    music.src=`./music/arjit.mp3`;
    music.play();
    document.getElementById(`${musicIndex}`).classList.remove('bi-play-fill');
 document.getElementById(`${musicIndex}`).classList.add('bi-pause-fill');
 /*------------song_tilte------------*/
 let song_tilte = songs.filter((elm)=>{
     return elm.id==musicIndex;
 });
 song_tilte.forEach((ele)=>{
     // console.log(ele);
     // compare songName value with ele
     let {songName}= ele;
     // console.log(songName);
     title.innerHTML=songName;
 })
 makeAllPlays();
 document.getElementById(`${musicIndex}`).classList.remove('bi-play-fill');
 document.getElementById(`${musicIndex}`).classList.add('bi-pause-fill');
 makeAllBackground();
 Array.from(document.getElementsByClassName('songItem'))[`${musicIndex-1}`].style.background=`rgba(53, 162, 159,0.2)`;
}

    
const random_music = ()=>{
    if(musicIndex==songs.length){
        musicIndex=1;
    }

    musicIndex=Math.floor((Math.random()*songs.length)+1);
    poster_master_play.src = `./image/music${musicIndex}.jpg`;
    music.src=`./music/arjit.mp3`;
    music.play();
    document.getElementById(`${musicIndex}`).classList.remove('bi-play-fill');
 document.getElementById(`${musicIndex}`).classList.add('bi-pause-fill');
 /*------------song_tilte------------*/
 let song_tilte = songs.filter((elm)=>{
     return elm.id==musicIndex;
 });
 song_tilte.forEach((ele)=>{
     // console.log(ele);
     // compare songName value with ele
     let {songName}= ele;
     // console.log(songName);
     title.innerHTML=songName;
 })
 makeAllPlays();
 document.getElementById(`${musicIndex}`).classList.remove('bi-play-fill');
 document.getElementById(`${musicIndex}`).classList.add('bi-pause-fill');
 makeAllBackground();
 Array.from(document.getElementsByClassName('songItem'))[`${musicIndex-1}`].style.background=`rgba(53, 162, 159,0.2)`;
}

music.addEventListener('ended',()=>{

    let b = shuffle.innerHTML;
     switch(b){
        case "next":
            next_music();
            break;
            case "repeat":
                repeat_music();
                break;
                case "random":
                    random_music();

                break;
     }
})