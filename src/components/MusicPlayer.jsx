import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";


export default function MusicPlayer() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6">
      <CurrentlyPlaying />

      <div className="flex-1 p-4 rounded-lg">
        <Playlist />
      </div>
    </div>
    );
}
