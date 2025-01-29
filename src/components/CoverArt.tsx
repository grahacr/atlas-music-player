// covert art component renders song image dynamically from API
type CoverArtProps = {
    cover: string;
}

export default function CoverArt({ cover }: CoverArtProps) {
    return (
    <div className="flex pl-6">
        <img
        src={cover}
        alt="song image"
        className="rounded-lg p-6 w-[600px] h-[500px]"
        />
    </div>
    )
}
