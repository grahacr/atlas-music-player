export default function PlaylistItem(props) {
    return (
        <div className="grid grid-cols-2 hover:bg-lightpink dark:hover:bg-darkPink p-2">
            <h2 className="font-medium text-dark dark:text-light">{props.songtitle}</h2>
                <div className="justify-items-end">
                    <h3 className="text-sm text-dark dark:text-light">{props.time}</h3>
                </div>
            <h3 className="text-sm text-dark dark:text-lightpink">{props.artist}</h3>
        </div>
        );
}