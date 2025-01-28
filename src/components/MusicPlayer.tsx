import { useEffect, useState } from "react";
import { usePlayer } from "./PlayerContext";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist  from "./Playlist";
import { fetchPlaylist, fetchSong, Song, PlaylistType } from "../api";


export default function MusicPlayer() {
  const { currentSongId, setCurrentSongId, setPlaylist } = usePlayer();
  const [songData, setSongData] = useState<Song | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlaylist();
      setPlaylist(data);

      if (data.length > 0) {
        setCurrentSongId(data[0].id);
      }
    };
    fetchData();
  }, [setCurrentSongId, setPlaylist]);

  useEffect(() => {
    if (currentSongId) {
        const getSong = async () => {
            const song = await fetchSong(currentSongId);
            setSongData(song);
        };
        getSong();
    }
}, [currentSongId]);

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4">
      <CurrentlyPlaying song={songData} />

      <div className="flex-1 rounded-lg">
        <Playlist />
      </div>
    </div>
    );
}
