import { useEffect, useState } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import { fetchPlaylist, Playlist as PlaylistType } from "../api";


export default function MusicPlayer() {
  const [playlist, setPlaylist] = useState<PlaylistType[]>([]);
  const [currentSong, setCurrentSong] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlaylist();
      setPlaylist(data);

      if (data.length > 0) {
        setCurrentSong(data[0].id);
      }
    };
    fetchData();
  }, []);

  const songClick = (songId: string) => {
    setCurrentSong(songId);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4">
      <CurrentlyPlaying songId={currentSong} />

      <div className="flex-1 rounded-lg">
        <Playlist playlist={playlist} onSongSelect={songClick} />
      </div>
    </div>
    );
}
