// player provider context manages STATE for songId, play mode, playback speed, shuffle enabling, and playlist
// utilizes custom types and fetch functions declared in api.ts
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Song, PlaylistType } from "../api";

// extendable type declaration for playercontexttype
interface PlayerContextType {
    currentSongId: string | null;
    setCurrentSongId: (id: string) => void;
    isPlaying: boolean;
    togglePlayPause: () => void;
    playBackSpeed: number;
    togglePlayBackSpeed: () => void;
    shuffleEnabled: boolean;
    toggleShuffle: () => void;
    playlist: PlaylistType[];
    setPlaylist: (playlist: PlaylistType[]) => void;
    goBack: () => void;
    goForward: () => void;
    shuffleSong: () => void;
}
// create context
const playerContext = createContext<PlayerContextType | undefined>(undefined);


// accepts children (of type ReactNode AKA any object) from components wrapped in context provider
export const PlayerProvider = ({ children }: {children : ReactNode }) => {
    const [currentSongId, setCurrentSongId] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [playBackSpeed, setPlayBackSpeed] = useState(1);
    const [shuffleEnabled, setShuffleEnabled] = useState(false);
    const [playlist, setPlaylist] = useState<PlaylistType[]>([]);
    
    // variable containing callback function to set isPlaying state to opposite of previous state
    const togglePlayPause = () => setIsPlaying(prev => !prev);

    // variable containing callback function to toggle play back speed based on state of playbackspeed
    const togglePlayBackSpeed = () => {
        setPlayBackSpeed(prev => (prev === 0.5 ? 1 : prev === 1 ? 2 : 0.5));
    };

    // variable containing callback arrow function to check shuffle enabled.
    // not fully implemented yet
    const toggleShuffle = () => setShuffleEnabled(prev => !prev);

    // variable containing callback arrow function to change current song to the song listed before it in playlist
    // manipulates currentsongId state
    const goBack = () => {
        if (currentSongId && playlist.length > 0) {
            const currentIndex = playlist.findIndex(song => song.id === currentSongId);
            if (currentIndex > 0) {
                setCurrentSongId(playlist[currentIndex - 1].id);
            }
        }
    };

    // opposite of previous function, it will hange current song to the song listed after it in playlist
    // manipulates currentsongId state
    const goForward = () => {
        if (currentSongId && playlist.length > 0) {
            const currentIndex = playlist.findIndex(song => song.id === currentSongId);
            if (currentIndex < playlist.length - 1) {
                setCurrentSongId(playlist[currentIndex + 1].id);
            }
        }
    }

    // variable containing arrow callback function which finds random song to assign to current song, enabling shuffle mode
    const shuffleSong = () => {
        if (playlist.length > 0) {
            const randomIndex = Math.floor(Math.random() * playlist.length);
            setCurrentSongId(playlist[randomIndex].id)
        }
    };

    // returns context provider and its values, calling on any children
    return (
        <playerContext.Provider
            value={{
                currentSongId,
                setCurrentSongId,
                isPlaying,
                togglePlayPause,
                playBackSpeed,
                togglePlayBackSpeed,
                shuffleEnabled,
                toggleShuffle,
                playlist,
                setPlaylist,
                goBack,
                goForward,
                shuffleSong,
            }}
            >
                {children}
            </playerContext.Provider>
    );
};

// export context to be used in other components
export const usePlayer = (): PlayerContextType => {
    const context = useContext(playerContext);
    if (!context) {
        throw new Error('usePlayer must be used within a PlayerProvider');
    }
    return context;
};
