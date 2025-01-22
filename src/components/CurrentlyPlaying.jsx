import VolumeControls from "./VolumeControls";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";


export default function CurrentlyPlaying() {
    return (
        <div className="flex-1 space-y-4">
        <div className="bg-gray-100 p-4 rounded-lg">
            <CoverArt />
            <SongTitle />
        </div>
        
        <div className="bg-gray-100 p-4 rounded-lg">
            <PlayControls />
            <VolumeControls />
        </div>
    </div>
    );
}