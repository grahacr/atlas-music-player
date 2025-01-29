// songtitle component renders song title using custom song type
// renders title and artist properties passed as arguments when function is called in currently playing parent prop

type SongTitleProps = {
    title: string;
    artist: string;
}

export default function SongTitle({title, artist}: SongTitleProps) {
    return (
        <div className="text-left pt-2 p-6">
            <h2 className="text-xl font-bold text-dark">{title}</h2>
            <p className="text-dark">{artist}</p>
        </div>
    )
}