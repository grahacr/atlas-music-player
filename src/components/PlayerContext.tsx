import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Song, PlaylistType } from "../api";

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

const playerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider = ({ children }: {children : ReactNode }) => {
    const [currentSongId, setCurrentSongId] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [playBackSpeed, setPlayBackSpeed] = useState(1);
    const [shuffleEnabled, setShuffleEnabled] = useState(false);
    const [playlist, setPlaylist] = useState<PlaylistType[]>([]);

    const togglePlayPause = () => setIsPlaying(prev => !prev);
    const togglePlayBackSpeed = () => {
        setPlayBackSpeed(prev => (prev === 0.5 ? 1 : prev === 1 ? 2 : 0.5));
    };
    const toggleShuffle = () => setShuffleEnabled(prev => !prev);
    const goBack = () => {
        if (currentSongId && playlist.length > 0) {
            const currentIndex = playlist.findIndex(song => song.id === currentSongId);
            if (currentIndex > 0) {
                setCurrentSongId(playlist[currentIndex - 1].id);
            }
        }
    };

    const goForward = () => {
        if (currentSongId && playlist.length > 0) {
            const currentIndex = playlist.findIndex(song => song.id === currentSongId);
            if (currentIndex < playlist.length - 1) {
                setCurrentSongId(playlist[currentIndex + 1].id);
            }
        }
    }

    const shuffleSong = () => {
        if (playlist.length > 0) {
            const randomIndex = Math.floor(Math.random() * playlist.length);
            setCurrentSongId(playlist[randomIndex].id)
        }
    };
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

export const usePlayer = (): PlayerContextType => {
    const context = useContext(playerContext);
    if (!context) {
        throw new Error('usePlayer must be used within a PlayerProvider');
    }
    return context;
};
