//Volume Controls component
export default function VolumeControls() {
    return (
        <div className="flex justify-center items-center">
            <input
                type="range"
                min="0"
                max="100"
                defaultValue="50"
                className="w-48"
            />
        </div>
    )
}