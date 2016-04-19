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
'<li class="list-group-item">'+
'<h4>'+ currentSong.title  + '</h4>'+
'<p>'+ currentSong.collection +
'<p> $' + currentSong.price + '</p>' +
'<p><img src="' + currentSong.albumArt + '"><audio src="' +currentSong.preview +  '"controls><audio></p>'+ 
'</li>'
}
songListElem.innerHTML= songs
}
