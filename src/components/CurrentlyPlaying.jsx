import VolumeControls from "./VolumeControls";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";


export default function CurrentlyPlaying() {
    return (
        <div className="flex-1 flex flex-col bg-lightpink">
            <CoverArt />
        
        <div className="flex flex-col justify-between">
            <SongTitle />
            <PlayControls />
            <VolumeControls />
        </div>
    </div>
    );
}