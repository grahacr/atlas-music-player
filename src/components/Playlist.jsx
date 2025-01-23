// playlist component

import PlaylistItem from "./PlaylistItem"

export default function Playlist() {
    return (
        <div className="flex flex-col bg-white p-2 rounded-lg">
            <h4 className="font-medium">Playlist</h4>
            <PlaylistItem />
        </div>
        );
}