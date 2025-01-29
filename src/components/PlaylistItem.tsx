// playlist item child component to playlist parent component, renders individual song
// utilizes custom type with property params passed from parent component
type PlaylistItemProps = {
    songtitle: string;
    artist: string;
    time: string;
    onClick: () => void;
}

// default function takes 4 arguments encapsulated in custom type
export default function PlaylistItem({ songtitle, artist, time, onClick}: PlaylistItemProps) {

    // returns individual playlist item with title, time, and artist formatted with Tailwind
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