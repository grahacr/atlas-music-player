//Volume Controls component
import volumePic from "../assets/volumePic.png";

type VolumeControlProps = {
    volume: number;
    setVolume: (value: number) => void;
}
export default function VolumeControls({ volume, setVolume}: VolumeControlProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(Number(e.target.value));
    };
    
    return (
        <div className="flex justify-center items-center w-full p-6">
            <img src={volumePic} />
            <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleChange}
                className="w-full cursor-pointer"
                color="gray"
            />
        </div>
    )
}