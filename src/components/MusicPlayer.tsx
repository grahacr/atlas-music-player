// main parent component for music player
// manages songData STATE
import { useEffect, useState } from "react";
import { usePlayer } from "./PlayerContext";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist  from "./Playlist";
import { fetchPlaylist, fetchSong, Song } from "../api";

// default function takes no arguments and returns render
export default function MusicPlayer() {
  // utilize variables/functions from player context
  const { currentSongId, setCurrentSongId, setPlaylist, playBackSpeed } = usePlayer();
  const [songData, setSongData] = useState<Song | null>(null);

  // react hook used for asynchronously fetching playlist data
  // resets playlist and currentsongId
  // first parameter: callback function that sets playlist with new data and initializes currentsongId
  // second parameter: dependency array that tells effect when to re-render
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

  // react hook for asynchronously fetching song and resetting current song id
  // first parameter: callback function to fetch song based on current song id
  // second parameter: dependency object that tells effect to re-render based on currentSongId

  useEffect(() => {
    if (currentSongId) {
        const getSong = async () => {
            const song = await fetchSong(currentSongId);
            setSongData(song);
        };
        getSong();
    }
}, [currentSongId]);

// return render for currentlyplaying (passing song data to component) and playlist child components
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4">
      <CurrentlyPlaying song={songData}/>

      <div className="flex-1 rounded-lg">
        <Playlist />
      </div>
    </div>
    );
}
