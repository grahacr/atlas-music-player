// main app component that returns render of complete App
// wraps main parent components in player context provider
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
