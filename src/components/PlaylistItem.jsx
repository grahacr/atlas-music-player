export default function PlaylistItem(props) {
    return (
        <div className="grid grid-cols-2 active:bg-light">
            <h2 className="font-medium text-dark">{props.songtitle}</h2>
                <div className="justify-items-end">
                    <h3 className="text-sm text-gray-500 text-dark">{props.time}</h3>
                </div>
            <h3 className="text-sm text-gray-500 text-darkPink">{props.artist}</h3>
        </div>
        );
}