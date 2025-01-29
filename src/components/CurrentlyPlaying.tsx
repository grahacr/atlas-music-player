// dynamically renders currently playing component
// parent component to children: coverart, songtitle, playcontrols, audioplayer, and volume controls
// maintains volume STATE and utilizes player context for play controls
import { usePlayer } from "./PlayerContext";
import { useState } from "react";
import VolumeControls from "./VolumeControls";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import AudioPlayer from "./AudioPlayer";
import PlayControls from "./PlayControls";
import { Song } from "../api";

// custom type includes song object or null
type CurrentlyPlayingProps = {
    song: Song | null;
}

// default function takes one argument of type Song and returns currently playing component render
export default function CurrentlyPlaying({ song }: CurrentlyPlayingProps) {

    // use volume state for displaying volume and manipulating volume level
     const [volume, setVolume] = useState(50)
     const { isPlaying, playBackSpeed} = usePlayer();

     // if no song, return loading message
    if (!song) {
        return <div>Loading...</div>;
    }

    // return render of current song with cover, title, and artist properties
    // and controls for managing play and volume state
    return (
        <div className="flex-1 flex flex-col bg-medium dark:bg-dark h-fill">
            <CoverArt cover={song.cover}/>
            <div className="flex flex-col justify-between dark:bg-lightpink">
                <SongTitle title={song.title} artist={song.artist}/>
                <PlayControls />
                <AudioPlayer
                songId={song.id}
                isPlaying={isPlaying}
                playBackSpeed={playBackSpeed}
                volume={volume} 
                />
                <VolumeControls
                volume={volume}
                setVolume={setVolume} />
            </div>
        </div>
    );
}