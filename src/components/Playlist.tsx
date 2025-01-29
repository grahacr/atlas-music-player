// playlist component renders Playlist next to or underneath currently playing component depending on screen size
import PlaylistItem from "./PlaylistItem";
import { usePlayer } from "./PlayerContext";

// helper function to format duration of songs into music player format 00:00
// takes one parameter from song object 'duration' property, and transforms seconds into minutes and seconds 
function formatDuration(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10? '0' : ''}${remainingSeconds}`;
}

// default function takes no arguments, utilizes context provider
// returns playlist render by mapping each song in the playlist to a playlist item element (child component)
// current song id is set when song is clicked on
export default function Playlist() {
    const { playlist, setCurrentSongId } = usePlayer();

    return (
        <div className="flex flex-col p-2 bg-medium dark:bg-dark">
            <h4 className="font-bold text-lg p-2 text-dark dark:text-light">Playlist</h4>
            {playlist.map((song) => {
                // passed multiple params to child component to render dynamically
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