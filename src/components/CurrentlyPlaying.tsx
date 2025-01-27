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
    
  const [isPlaying, setIsPlaying] = useState(false);

  const onTogglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

    if (!song) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex-1 flex flex-col bg-medium dark:bg-dark h-fill">
            <CoverArt cover={song.cover}/>
        
        <div className="flex flex-col justify-between dark:bg-lightpink">
            <SongTitle title={song.title} artist={song.artist}/>
            <PlayControls isPlaying={isPlaying} onTogglePlayPause={onTogglePlayPause}/>
            <AudioPlayer songId={song.id} isPlaying={isPlaying} />
            <VolumeControls />
        </div>
    </div>
    );
}