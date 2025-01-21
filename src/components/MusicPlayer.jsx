export default function MusicPlayer() {
  return (
    <div className="flex flex-row w-full">
      <div className="flex-1 p-4 bg-gray-200">
        <img src="../src/assets/placeholder.svg" alt="song image" />
        <p>Song Title</p>
        <p>artist</p>
      </div>

      <div className="flex-1 p-4 bg-gray-100">
        <h2>Playlist</h2>
      </div>
    </div>
    );
}
