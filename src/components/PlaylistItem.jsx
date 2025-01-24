export default function PlaylistItem(props) {
    return (
        <div className="grid grid-cols-2 active:bg-gray-100">
            <h2 className="font-medium">{props.songtitle}</h2>
                <div className="justify-items-end">
                    <h3 className="text-sm text-gray-500">{props.time}</h3>
                </div>
            <h3 className="text-sm text-gray-500">{props.artist}</h3>
        </div>
        );
}