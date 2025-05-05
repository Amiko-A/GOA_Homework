let playlist = ["Playboi", "Kanye", "Lil Tecca", "Travis Scott", "Kendrick"];

function addSong(songTitle) {
  playlist.unshift(songTitle);
  return playlist;
}

function removeLastSong() {
  playlist.pop();
  return playlist;
}

function moveSongs() {
  playlist.copyWithin(playlist.length, 0, 2);
  return playlist;
}

function combinePlaylists(secondPlaylist) {
  let combinedPlaylist = playlist.concat(secondPlaylist);
  return combinedPlaylist;
}