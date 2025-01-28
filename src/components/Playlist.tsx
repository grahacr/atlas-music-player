// playlist component
import PlaylistItem from "./PlaylistItem";
import { usePlayer } from "./PlayerContext";

function formatDuration(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10? '0' : ''}${remainingSeconds}`;
}

export default function Playlist() {
    const { playlist, setCurrentSongId } = usePlayer();

    return (
        <div className="flex flex-col p-2 bg-medium dark:bg-dark">
            <h4 className="font-bold text-lg p-2 text-dark dark:text-light">Playlist</h4>
            {playlist.map((song) => {
                return (
                <PlaylistItem
                    key={song.id}
                    songtitle={song.title}
                    artist={song.artist}
                    time={formatDuration(song.duration)}
                    onClick={() => setCurrentSongId(song.id)}
                    />
                );
            })}
        </div>
    );
}