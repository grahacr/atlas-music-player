// songtitle component renders song title

interface SongTitleProps {
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