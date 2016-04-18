//Do Not Modify the getMusic function
function getMusic(){
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}

function drawSongs(songList){
  
  var songListElem = document.getElementById('songList');
for(var i =0; i< songList.length; i++){
  var currentSong = songList[i];
  
songListElem.innerHTML +=  '<br>'+'<li>' + "Title: "+ currentSong.title  + "<li>" + " Album Art: " + '<img src=' +currentSong.albumArt + '>' + "<li>" + " Collection: " + currentSong.collection + "<li>" + "Price: $" + currentSong.price + "<li>" + " Preview: " + '<audio src=' +currentSong.preview + ' controls><audio>'+'>' + '<br>';
}
}

// function reset(){
//   songListElem.innerHTML= '';
// }
