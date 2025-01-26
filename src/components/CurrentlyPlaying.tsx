import VolumeControls from "./VolumeControls";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";


export default function CurrentlyPlaying() {
    return (
        <div className="flex-1 flex flex-col bg-medium dark:bg-dark h-fill">
            <CoverArt />
        
        <div className="flex flex-col justify-between dark:bg-lightpink">
            <SongTitle />
            <PlayControls />
            <VolumeControls />
        </div>
    </div>
    );
}