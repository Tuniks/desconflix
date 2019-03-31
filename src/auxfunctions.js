import playlistdata from './playlistinfo.json'


export function getPlaylistNameFromId(id){
    var playlisttitle = 'noname';

    for(var i = 0; i < playlistdata.items.length; i++){
        if(playlistdata.items[i].id == id){
            playlisttitle = playlistdata.items[i].snippet.title;
        }
    }

    return playlisttitle;
}

export function getVideoDataFromId(id){
    var playlisttitle = 'noname';

    for(var i = 0; i < playlistdata.items.length; i++){
        if(playlistdata.items[i].id == id){
            playlisttitle = playlistdata.items[i].snippet.title;
        }
    }

    return playlisttitle;
}