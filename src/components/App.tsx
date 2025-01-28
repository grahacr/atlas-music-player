
import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import { PlayerProvider } from "./PlayerContext";

function App() {
  return (
    <div className="dark:bg-darkPink bg-lightpink">
      <PlayerProvider>
      <MusicPlayer />
      <Footer />
      </PlayerProvider>
    </div>
  );
}

export default App;
