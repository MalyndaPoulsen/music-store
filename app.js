//Do Not Modify the getMusic function
function getMusic(){
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}
function reset(){
    var songListElem= '';
    document.getElementById('reset-button')
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




// songListElem.innerHTML += 
// '<li class="list-group-item">'+
// '<h4>'+ currentSong.title  + '</h4>'+
// '<p>'+ currentSong.collection + '</p>' +
// '<p> $' + currentSong.price + '</p>' +
// '<p><img src="' + currentSong.albumArt + '"></p>'+
// '<p><audio src="' +currentSong.preview +  '"controls><audio></p>'+ 
// '</li>'
// }
// }

songListElem.innerHTML += 
'<li class="list-group-item">'+
'<h4>'+ currentSong.title  + '</h4>'+
'<p>'+ currentSong.collection +
'<p> $' + currentSong.price + '</p>' +
'<p><img src="' + currentSong.albumArt + '"><audio src="' +currentSong.preview +  '"controls><audio></p>'+ 
'</li>'
}
}
document.getElementById('reset-button')