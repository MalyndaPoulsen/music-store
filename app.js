//Do Not Modify the getMusic function

function getMusic(){
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}


function drawSongs(songList){

var songListElem = document.getElementById('songList');
songListElem.innerHTML= '';
 var songs=''; 
for(var i =0; i < songList.length; i++){
  var currentSong = songList[i];

songs += 
'<li class="list-group-item">'+'<div class="row">'+
'<div class="col-xs-6"><img src="' + currentSong.albumArt + '"><br>'+
'<audio src="' +currentSong.preview +  '"controls><audio></div>'+
'<div class="col-xs-6"><h4>'+ currentSong.title  + '</h4>'+
'<p>'+ currentSong.collection +'</p>'+
'<p> $' + currentSong.price + '</p></div>' 
'</li>'
}
songListElem.innerHTML= songs
}
