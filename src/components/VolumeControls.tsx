//Volume Controls component renders volume slider and handles volume STATE changes using state passed from currently playing
import volumePic from "../assets/volumePic.png";

// custom type passed in from parent component which maintains volume state
type VolumeControlProps = {
    volume: number;
    setVolume: (value: number) => void;
}

// default function takes custom type as argument, which includes a number and a function
export default function VolumeControls({ volume, setVolume}: VolumeControlProps) {

    // callback arrow function that takes an input element event as argument, when volume is changed
    // sets volume state to new value of event target, converted to number instead of string
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(Number(e.target.value));
    };
    
    // return render of volume slider that dynamically handles volume changes
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