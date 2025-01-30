// audio control component manages reference to audio element and maintains audio url STATE
// retrieves specific song audio url using songId passed from parent component
// with specific song, renders ability to play, pause, change playback speed, and volume level
import { useEffect, useState, useRef } from "react";
import { fetchSong } from "../api";

// custom type for audio player, with properties passed in from parent component
type AudioPlayerProps = {
    songId: string | null;
    isPlaying: boolean;
    playBackSpeed: number;
    volume: number;
};

// default function takes custom type, utilizes multiple react hooks, and returns audio reference to play song
export default function AudioPlayer({ songId, isPlaying, playBackSpeed, volume }: AudioPlayerProps) {
    // react hooks to reference DOM element for manipulation and current song audio url state
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [audioURL, setAudioUrl] = useState<string | null>(null);

    // react hook triggers side effect when song is changed
    // first parameter is callback arrow function using songId passed from parent component
    // embedded asynchronous callback fetches audio url property ('song')from response object and assigns to audioURL state
    // second parameter is dependency object that tells react what state change triggers this side effect
    useEffect(() => {
        if (songId) {
            const fetchAudioUrl = async () => {
                const response = await fetchSong(songId);
                if (response !== null) {
                    setAudioUrl(response.song);
                } else {
                    console.error('Error retreiving reponse');
                }

            };
            fetchAudioUrl();
        }
    }, [songId]);

    // react hook triggers side effect when state of isplaying changes
    // first argument is callback arrow function that plays or pauses audio reference
    // second argument is dependency array that tells hook which state changes trigger this side effect
    useEffect(() => {
        if (audioRef.current && audioURL) {
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, audioURL]);

    // react hook triggers side effect to assign play back speed
    // first argument is callback arrow function that updates playback speed when speed or url changes
    // 2nd argument is dependency array that lists state changes that would trigger this side effect
    useEffect(() => {
        if (audioRef.current && audioURL) {
            audioRef.current.playbackRate = playBackSpeed;
        }
    }, [playBackSpeed, audioURL]);

    // react hook triggers side effect to adjust volume
    // first argument is callback arrow function to set volume of current audio reference
    // 2nd argument is dependency object whose state changes trigger this side effect
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume / 100
        }
    }, [volume]);

    // return audio reference element render with source URL or empty string
    return (
        <audio ref={audioRef} src={audioURL ?? ""} />
    );
}