// play controls component
import PlayImage from "../assets/Play.png";
import rewind from "../assets/rewind.png";
import FastForward from "../assets/FastForward.png";
import shuffle from "../assets/shuffle.png";

export default function PlayControls() {
    return (
        <div className="flex justify-center items-center space-x-20 px-6">
            <h1 className="font-bold">1x</h1>
            <img src={rewind} alt="rewind" className="fill-black" />
            <img src={PlayImage} alt="play" className="fill-black" />
            <img src={FastForward} alt="fastforward" />
            <img src={shuffle} alt="shuffle" />


        </div>
    );
}