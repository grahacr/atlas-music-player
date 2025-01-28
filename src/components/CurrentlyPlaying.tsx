import { usePlayer } from "./PlayerContext";
import { useState } from "react";
import VolumeControls from "./VolumeControls";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import AudioPlayer from "./AudioPlayer";
import PlayControls from "./PlayControls";
import { Song } from "../api";

type CurrentlyPlayingProps = {
    song: Song | null;
}

export default function CurrentlyPlaying({ song }: CurrentlyPlayingProps) {
     const [volume, setVolume] = useState(50)
     const { isPlaying, playBackSpeed} = usePlayer();


    if (!song) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex-1 flex flex-col bg-medium dark:bg-dark h-fill">
            <CoverArt cover={song.cover}/>
            <div className="flex flex-col justify-between dark:bg-lightpink">
                <SongTitle title={song.title} artist={song.artist}/>
                <PlayControls />
                <AudioPlayer
                songId={song.id}
                isPlaying={isPlaying}
                playBackSpeed={playBackSpeed} />
                <VolumeControls
                volume={volume}
                setVolume={setVolume} />
            </div>
        </div>
    );
}