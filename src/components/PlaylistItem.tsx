type PlaylistItemProps = {
    songtitle: string;
    artist: string;
    time: string;
    onClick: () => void;
}

export default function PlaylistItem({ songtitle, artist, time, onClick}: PlaylistItemProps) {
    return (
        <div
        className="grid grid-cols-2 hover:bg-lightpink dark:hover:bg-darkPink p-2 cursor-pointer"
        onClick={onClick}
        >
            <h2 className="font-medium text-dark dark:text-light">{songtitle}</h2>
                <div className="justify-items-end">
                    <h3 className="text-sm text-dark dark:text-light">{time}</h3>
                </div>
            <h3 className="text-sm text-dark dark:text-lightpink">{artist}</h3>
        </div>
        );
}