import playlistdata from './playlistinfo.json'
import videodata from './playlistitems.json'
import customplaylist from './customplaylist.json'

export function getPlaylistNameFromId(id){
    var playlisttitle = false;

    for(var i = 0; i < playlistdata.items.length; i++){
        if(playlistdata.items[i].id === id){
            playlisttitle = playlistdata.items[i].snippet.title;
        }
    }

    return playlisttitle;
}

export function getVideoDataFromId(id){
    var video = false;

    for(var i = 0; i < videodata.playlistdata.length; i++){
       for(var j = 0; j < videodata.playlistdata[i].items.length; j++){
           if(videodata.playlistdata[i].items[j].snippet.resourceId.videoId === id){
               video = videodata.playlistdata[i].items[j];
           }
       }
    }

    return video;
}


export function getVideoListFromCustomPlaylistTitle(playlisttitle){
    var videolist = [];

    for(var i = 0; i < customplaylist.playlists.length; i++){
        if(customplaylist.playlists[i].title === playlisttitle){
            for(var j = 0; j < customplaylist.playlists[i].items.length; j++){
                videolist.push(getVideoDataFromId(customplaylist.playlists[i].items[j].id))
            }
        }
    }

    return videolist;
}

export function getRandomVideoId(){
    var randomInt = Math.floor(Math.random() * customplaylist.playlists[0].items.length);
    return customplaylist.playlists[0].items[randomInt].id;
}