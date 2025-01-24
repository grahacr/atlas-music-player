// playlist component

import PlaylistItem from "./PlaylistItem"

export default function Playlist() {
    return (
        <div className="flex flex-col p-2 bg-medium dark:bg-dark">
            <h4 className="font-bold text-lg p-2 text-dark dark:text-light">Playlist</h4>
            <PlaylistItem songtitle="Power Play" artist="Etta James" time="5:55" />
            <PlaylistItem songtitle="No One Dies From Love" artist="Tove Lo" time="8:02"/>
            <PlaylistItem songtitle="Pinch Me" artist="Barenaked Ladies" time="3:01" />
            <PlaylistItem songtitle="Cosmic Dancer" artist="T-Rex" time="5:01" />
            <PlaylistItem songtitle="American Way" artist="Supergold" time="4:54" />
            <PlaylistItem songtitle="Revolution" artist="AYIRA" time="6:13" />
            <PlaylistItem songtitle="All You Fascists Bound To Lose" artist="Resistance Revival Chorus" time="8:41" />
            <PlaylistItem songtitle="Sante" artist="Stromae" time="2:27" />
            <PlaylistItem songtitle="Microfiche" artist="Open Mike Eagle" time="3:15" />
            <PlaylistItem songtitle="Iceland Moss" artist="Suden Archives" time="8:22" />
        </div>
        );
}