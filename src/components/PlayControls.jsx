// play controls component
import PlayImage from "../assets/Play.png";

export default function PlayControls() {
    return (
        <div className="flex justify-center items-center space-x-4">
            <button className="p-2">
                <img src={PlayImage} alt="play" className="w-12 h-12">
                </img>
            </button>
        </div>
    );
}