// play controls component utilizes play controls and callback functions declared in player context provider

import { usePlayer } from "./PlayerContext";
import PlayImage from "../assets/Play.png";
import rewind from "../assets/rewind.png";
import PauseImage from "../assets/Pause.png"
import FastForward from "../assets/FastForward.png";
import shuffle from "../assets/shuffle.png";

// default function takes no arguments
// returns render for play controls including playback speed, back and forward buttons, play/pause button, and shuffle button
export default function PlayControls() {
    const { isPlaying, togglePlayPause, playBackSpeed, togglePlayBackSpeed, shuffleEnabled,
        toggleShuffle, goBack, goForward, shuffleSong } = usePlayer();
        
        return (
        <div className="flex justify-center items-center space-x-20 px-6">
            <h1 className="font-bold cursor-pointer" onClick={togglePlayBackSpeed}>
                {playBackSpeed}x</h1>
                <img src={rewind} alt="rewind" onClick={goBack} className="cursor-pointer"/>
                <img
                src={isPlaying? PauseImage : PlayImage}
                alt={isPlaying? "Pause" : "Play"}
                onClick={togglePlayPause}
                className="cursor-pointer"/>
                <img src={FastForward} alt="fastforward" onClick={goForward} className="cursor-pointer" />
                <img
                src={shuffle}
                alt="shuffle"
                onClick={shuffleSong}
                className="cursor-pointer"
                />
        </div>
    );
}