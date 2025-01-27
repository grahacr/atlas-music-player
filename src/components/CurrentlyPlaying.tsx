import { useEffect, useState } from "react";
import { fetchSong, Song } from "../api";
import VolumeControls from "./VolumeControls";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";

interface CurrentlyPlayingProps {
    songId: string | null;
}

export default function CurrentlyPlaying({ songId }: CurrentlyPlayingProps) {
    const [currentSong, setCurrentSong] = useState<Song | null>(null);

    useEffect(() => {
        if (songId) {
            const getSong = async () => {
                const song = await fetchSong(songId);
                setCurrentSong(song);
            };
            getSong();
        }
    }, [songId]);

    if (!currentSong) {
        return <div>Loading...</div>;
    }
    return (
        <div className="flex-1 flex flex-col bg-medium dark:bg-dark h-fill">
            <CoverArt cover={currentSong.cover}/>
        
        <div className="flex flex-col justify-between dark:bg-lightpink">
            <SongTitle title={currentSong.title} artist={currentSong.artist}/>
            <PlayControls />
            <VolumeControls />
        </div>
    </div>
    );
}