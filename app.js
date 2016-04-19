//Do Not Modify the getMusic function
function getMusic(){
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}
function reset(){
    var songListElem= '';
}
var songListElem = document.getElementById('songList');


function drawSongs(songList){
  reset();
for(var i =0; i < songList.length; i++){
  var currentSong = songList[i];
  
// songListElem.innerHTML += '<li class="list-group-item"><div class="row image-responsive">'+

// '<div class="col-xs-4"><img src="' + currentSong.albumArt + '"></div>'+
// '<div class="col-xs-4"><h4>Title: '+currentSong.title  + '</h4>'
// + currentSong.collection + '<br> $' + currentSong.price + '</div>' +
// '<div class="col-xs-4"><audio src="' +currentSong.preview +  '"controls><audio></div></li>'
// }
// }



songListElem.innerHTML += 
'<li class="list-group-item>'+
'<h4>'+ currentSong.title  + '</h4>'+
'<p><img src="' + currentSong.albumArt + '"></p>'+
'<p><audio src="' +currentSong.preview +  '"controls><audio></p>'+ 
'<p>'+ currentSong.collection + '</p>' +
'<p> $' + currentSong.price + '</p>' +
'</li>'
}
}