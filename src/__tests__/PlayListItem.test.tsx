import { render } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import PlaylistItem from "../components/PlaylistItem.tsx";
import { PlayerProvider } from "../components/PlayerContext.tsx";


test("playlist item returns title, artist, and time", () => {
    const { container } = render(
    <PlayerProvider>
        <PlaylistItem
        songtitle="Painted in Blue"
        artist="Soul Canvas"
        time="194" onClick={() => {}}
            />
        </PlayerProvider>
    );
    expect(container).toMatchSnapshot();
});

test("playlist item onClick prop function was not called", () => {
    const mockCurrentSongId = vi.fn();

    const { container } = render(
        <PlayerProvider>
            <PlaylistItem
            songtitle="Painted in Blue"
            artist="Soul Canvas"
            time="194"
            onClick={mockCurrentSongId}
            />
        </PlayerProvider>
    );
    expect(container).toMatchSnapshot;
    expect(mockCurrentSongId).not.toHaveBeenCalled();
})
