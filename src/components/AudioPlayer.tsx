import { useEffect, useState, useRef } from "react";
import { fetchSong } from "../api";

type AudioPlayerProps = {
    songId: string | null;
    isPlaying: boolean;
};

export default function AudioPlayer({ songId, isPlaying }: AudioPlayerProps) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [audioURL, setAudioUrl] = useState<string | null>(null);

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

    useEffect(() => {
        if (audioRef.current && audioURL) {
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, audioURL]);

    return (
        <audio ref={audioRef} src={audioURL ?? ""} />
    );
}