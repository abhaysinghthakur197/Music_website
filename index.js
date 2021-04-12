
var songs=["song1.mp3","song2.mp3","song3.mp3"];
var image=["image1.jfif","image2.jpg","image3.jfif"];

var songtitle= document.getElementById("songtitle");
var fillbar = document.getElementById("fill");

var song =  new Audio();
 var currentsong = 0;

window.onload = playsong();
function playsong(){
    song.src = songs[currentsong];
 
    songtitle.textContent = songs[currentsong];

    song.play();
};

function playorpause(){
    if(song.paused){
        song.play();
        $("#play img").attr("src","pause.png");
    }
    else{
        song.pause();
        $("#play img").attr("src","play.png");
    }
}


song.addEventListener('timeupdate',()=>{
    var position = song.currentTime/song.duration;
    fillbar.style.width = position *100+'%';
})

function next(){
    currentsong++;

    if(currentsong>2){
        currentsong=0;
    }
    playsong();
    $("#play img").attr("src","pause.png")
    $("#image img").attr("src",image[currentsong]);
    $("#bg img").attr("src",image[currentsong]);
}

function pre(){
    currentsong--;

    if(currentsong==0 && currentsong>2){
        currentsong=2;
    }
    playsong();
    $("#play img").attr("src","pause.png")
    $("#bg img").attr("src",image[currentsong]);
    $("#image img").attr("src",image[currentsong]);

}
