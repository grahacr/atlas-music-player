// play controls component
import PlayImage from "../assets/Play.png";
import rewind from "../assets/rewind.png";
import PauseImage from "../assets/Pause.png"
import FastForward from "../assets/FastForward.png";
import shuffle from "../assets/shuffle.png";

type PlayControlProps = {
    isPlaying: boolean;
    onTogglePlayPause: () => void;
};

export default function PlayControls({ isPlaying, onTogglePlayPause}: PlayControlProps) {
    return (
        <div className="flex justify-center items-center space-x-20 px-6">
            <h1 className="font-bold">1x</h1>
            <img src={rewind} alt="rewind" />
            <img
             src={isPlaying? PauseImage : PlayImage}
             alt={isPlaying? "Pause" : "Play"}
             onClick={onTogglePlayPause}
             style={{ cursor: 'pointer '}} />
            <img src={FastForward} alt="fastforward" />
            <img src={shuffle} alt="shuffle" />
        </div>
    );
}