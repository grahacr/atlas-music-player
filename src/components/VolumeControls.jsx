//Volume Controls component
import volume from "../assets/volume.png";

export default function VolumeControls() {
    return (
        <div className="flex justify-center items-center w-full">
            <img src={volume} />
            <input
                type="range"
                min="0"
                max="100"
                defaultValue="50"
                className="w-full"
                color="gray"
            />
        </div>
    )
}